import { Modal, SectionTitle } from '@/shared/ui';
import { useQuestionModal } from '@/shared/lib';
import { QuestionForm } from '@/features/send-question';
import styles from './QuestionModal.module.css';

export function QuestionModal() {
  const { isOpen, close } = useQuestionModal();

  return (
    <Modal isOpen={isOpen} onClose={close} labelledBy="question-modal-title">
      <SectionTitle id="question-modal-title" size="lg">
        Have a Question ?
        <br />
        Let’s Get in Touch with us{' '}
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </SectionTitle>
      <p className={styles.text}>Fill up the form and the team will get back to within 24 hrs</p>
      <QuestionForm onDone={close} />
    </Modal>
  );
}
