import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="p-4">
      <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link>
    </div>
  );
};

export default TeacherPage;
