import * as yup from "yup";

export const reportSchema = yup.object({
  datingApp: yup.string().required("Please select a dating app"),
  profileUrl: yup
    .string()
    .required("Please provide a profile URL or username")
    .min(3, "Profile URL or username must be at least 3 characters"),
  type: yup
    .string()
    .oneOf(["suspicious", "bad_experience"])
    .required("Please select a report type"),
  reason: yup
    .string()
    .required("Please provide a reason")
    .min(10, "Reason must be at least 10 characters")
    .max(100, "Reason must not exceed 100 characters"),
  description: yup
    .string()
    .required("Please provide a detailed description")
    .min(50, "Description must be at least 50 characters")
    .max(1000, "Description must not exceed 1000 characters"),
});

export type ReportFormData = yup.InferType<typeof reportSchema>;