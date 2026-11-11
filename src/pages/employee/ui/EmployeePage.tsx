import { Navigate, useParams } from 'react-router-dom';
import { Container } from '@/shared/ui';
import { useDocumentTitle } from '@/shared/lib';
import { getEmployeeById } from '@/entities/employee';
import { LATEST_POSTS, getPostsByAuthor } from '@/entities/blog-post';
import { BlogSection } from '@/widgets/blog-section';
import { SocialLinks } from '@/widgets/footer';
import styles from './EmployeePage.module.css';

export function EmployeePage() {
  const { id = '' } = useParams();
  const employee = getEmployeeById(id);
  useDocumentTitle(employee?.name ?? 'Team');

  if (!employee) return <Navigate to="/404" replace />;

  const posts = getPostsByAuthor(employee.id);
  const firstName = employee.name.split(' ')[0];

  return (
    <>
      <section className={styles.profile}>
        <Container className={[styles.inner, 'fade-up'].join(' ')}>
          <img src={employee.photo} alt={employee.name} className={styles.photo} width={320} height={320} />
          <h1 className={styles.name}>{employee.name}</h1>
          <p className={styles.role}>{employee.role}</p>
          <p className={styles.bio}>{employee.bio}</p>
          <SocialLinks links={employee.socials.slice(0, 3)} className={styles.socials} />
        </Container>
      </section>
      <BlogSection title={`Blog posts from ${firstName}`} posts={posts.length ? posts : LATEST_POSTS} />
    </>
  );
}
