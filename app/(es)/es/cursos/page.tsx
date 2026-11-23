import { CoursesPage, coursesMeta } from "@/components/pages/Courses";

export const metadata = coursesMeta("es");

export default function CoursesEs() {
  return <CoursesPage locale="es" />;
}
