import { useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return null;
};

export default Index;