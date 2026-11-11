import { useId, useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import { Icon } from '../icon/Icon';
import styles from './FileUpload.module.css';

interface FileUploadProps {
  label?: string;
  hint?: string;
  accept?: string;
  maxSizeMb?: number;
  value?: File | null;
  error?: string;
  onChange: (file: File | null) => void;
}

export function FileUpload({
  label = 'Attach your CV',
  hint = 'PDF, DOC or DOCX, up to 5 MB',
  accept = '.pdf,.doc,.docx',
  maxSizeMb = 5,
  value,
  error,
  onChange,
}: FileUploadProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setDragging] = useState(false);
  const [sizeError, setSizeError] = useState('');

  const pick = (file: File | undefined) => {
    if (!file) return;
    if (file.size > maxSizeMb * 1024 * 1024) {
      setSizeError(`File is larger than ${maxSizeMb} MB`);
      return;
    }
    setSizeError('');
    onChange(file);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => pick(event.target.files?.[0]);

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    pick(event.dataTransfer.files?.[0]);
  };

  const clear = () => {
    onChange(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const message = sizeError || error;

  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={inputId}
        className={[styles.zone, isDragging ? styles.dragging : '', message ? styles.invalid : ''].join(' ')}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <span className={styles.icon}>
          <Icon name="upload" size={20} />
        </span>
        <span className={styles.text}>
          <span className={styles.label}>{value ? value.name : label}</span>
          <span className={styles.hint}>{value ? `${(value.size / 1024).toFixed(0)} KB` : hint}</span>
        </span>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={accept}
          className="visually-hidden"
          onChange={handleChange}
        />
      </label>
      {value && (
        <button type="button" className={styles.clear} onClick={clear} aria-label="Remove file">
          <Icon name="close" size={16} />
        </button>
      )}
      {message && (
        <span className={styles.error} role="alert">
          {message}
        </span>
      )}
    </div>
  );
}
