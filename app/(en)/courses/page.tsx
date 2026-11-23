import { CoursesPage, coursesMeta } from "@/components/pages/Courses";

export const metadata = coursesMeta("en");

export default function CoursesEn() {
  return <CoursesPage locale="en" />;
}
