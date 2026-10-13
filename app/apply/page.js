'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "./Apply.module.css";

export default function Apply() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationality: "",
    county: "",
    primarySchool: "",
    kcpeMarks: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    form: "",
    subjects: [],
    declaration: false,
    documents: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required";
    if (!formData.county.trim()) newErrors.county = "County is required";
    if (!formData.primarySchool.trim()) newErrors.primarySchool = "Primary school is required";

    const marks = parseInt(formData.kcpeMarks);
    if (!formData.kcpeMarks) {
      newErrors.kcpeMarks = "KCPE marks are required";
    } else if (isNaN(marks) || marks < 0 || marks > 500) {
      newErrors.kcpeMarks = "KCPE marks must be between 0 and 500";
    }

    if (!formData.parentName.trim()) newErrors.parentName = "Parent/guardian name is required";
    if (!formData.parentPhone.trim()) newErrors.parentPhone = "Parent phone number is required";
    if (!formData.parentEmail.trim()) {
      newErrors.parentEmail = "Parent email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.parentEmail)) {
        newErrors.parentEmail = "Please enter a valid email address";
      }
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.form) newErrors.form = "Form/Class is required";
    if (!formData.declaration) newErrors.declaration = "You must agree to the declaration";

    const maxSize = 10 * 1024 * 1024;
    for (const file of formData.documents) {
      if (file.size > maxSize) {
        newErrors.documents = `File "${file.name}" exceeds 10MB limit`;
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setStatus({ type: null, message: "" });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      subjects: checked
        ? [...prev.subjects, value]
        : prev.subjects.filter((s) => s !== value),
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      documents: files,
    }));
    setStatus({ type: null, message: "" });
    if (errors.documents) {
      setErrors((prev) => ({ ...prev, documents: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fix the errors in the form" });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("dob", formData.dob);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("nationality", formData.nationality);
      formDataToSend.append("county", formData.county);
      formDataToSend.append("primarySchool", formData.primarySchool);
      formDataToSend.append("kcpeMarks", formData.kcpeMarks);
      formDataToSend.append("parentName", formData.parentName);
      formDataToSend.append("parentPhone", formData.parentPhone);
      formDataToSend.append("parentEmail", formData.parentEmail);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("form", formData.form);
      formDataToSend.append("declaration", formData.declaration.toString());

      formData.subjects.forEach((subject) => {
        formDataToSend.append("subjects", subject);
      });

      formData.documents.forEach((doc) => {
        formDataToSend.append("documents", doc);
      });

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to submit application. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.apply}>
        <section className={styles.successSection}>
          <div className={styles.successContent}>
            <div className={styles.successIcon}>✓</div>
            <h1>Application Submitted!</h1>
            <p>
              Thank you for applying to Lamu Girls High School. We have received
              your application and will review it shortly.
            </p>
            <p>
              You will receive further communication from the school. For inquiries, contact us at 0721693606 or lamugirls71@gmail.com.
            </p>
            <a href="/" className={styles.btnPrimary}>
              Return to Home
            </a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.apply}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/labanda2.png"
            alt="Lamu Girls Campus"
            fill
            className={styles.heroImage}
            priority
            quality={85}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Online Application</h1>
          <p className={styles.heroSubtitle}>
            Begin your journey to excellence. Fill out the form below to apply
            for admission to Lamu Girls High School.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formHeader}>
            <h2>Application Form</h2>
            <p>
              Please fill in all required fields accurately. Fields marked with
              * are mandatory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.applicationForm} encType="multipart/form-data">
            {status.message && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}

            {/* Student Information */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Student Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="dob">Date of Birth *</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.dob && <span className={styles.errorText}>{errors.dob}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select gender</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && <span className={styles.errorText}>{errors.gender}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="nationality">Nationality *</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="Enter nationality"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.nationality && <span className={styles.errorText}>{errors.nationality}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="county">County *</label>
                  <input
                    type="text"
                    id="county"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    placeholder="Enter county"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.county && <span className={styles.errorText}>{errors.county}</span>}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Academic Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="primarySchool">Primary School *</label>
                  <input
                    type="text"
                    id="primarySchool"
                    name="primarySchool"
                    value={formData.primarySchool}
                    onChange={handleChange}
                    placeholder="Enter primary school name"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.primarySchool && <span className={styles.errorText}>{errors.primarySchool}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="kcpeMarks">KCPE Marks *</label>
                  <input
                    type="number"
                    id="kcpeMarks"
                    name="kcpeMarks"
                    value={formData.kcpeMarks}
                    onChange={handleChange}
                    placeholder="e.g., 400"
                    min="0"
                    max="500"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.kcpeMarks && <span className={styles.errorText}>{errors.kcpeMarks}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="form">Form/Class Applying For *</label>
                  <select
                    id="form"
                    name="form"
                    value={formData.form}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select form</option>
                    <option value="Form 1">Form 1</option>
                    <option value="Form 2">Form 2</option>
                    <option value="Form 3">Form 3</option>
                    <option value="Form 4">Form 4</option>
                  </select>
                  {errors.form && <span className={styles.errorText}>{errors.form}</span>}
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Parent/Guardian Information</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="parentName">Full Name *</label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter parent/guardian name"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.parentName && <span className={styles.errorText}>{errors.parentName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="parentPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="e.g., 0721693606"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.parentPhone && <span className={styles.errorText}>{errors.parentPhone}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="parentEmail">Email Address *</label>
                  <input
                    type="email"
                    id="parentEmail"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    placeholder="parent@email.com"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.parentEmail && <span className={styles.errorText}>{errors.parentEmail}</span>}
                </div>
                <div className={styles.formGroup} style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="address">Physical Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter residential address"
                    required
                    disabled={isSubmitting}
                  />
                  {errors.address && <span className={styles.errorText}>{errors.address}</span>}
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Subjects of Interest</h3>
              <p className={styles.formNote}>
                Select subjects the student would like to pursue (optional)
              </p>
              <div className={styles.checkboxGrid}>
                {[
                  "Mathematics",
                  "English",
                  "Kiswahili",
                  "Biology",
                  "Chemistry",
                  "Physics",
                  "History",
                  "Geography",
                  "CRE",
                  "Agriculture",
                  "Business Studies",
                  "Computer Studies",
                ].map((subject) => (
                  <label key={subject} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="subjects"
                      value={subject}
                      checked={formData.subjects.includes(subject)}
                      onChange={handleSubjectChange}
                      disabled={isSubmitting}
                    />
                    <span>{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Document Upload */}
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Supporting Documents</h3>
              <p className={styles.formNote}>
                Upload relevant documents (e.g., Birth Certificate, KCPE Result Slip, Previous School Report). Max 10MB per file. You may select multiple files.
              </p>
              <div className={styles.formGroup}>
                <label htmlFor="documents">Upload Documents</label>
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                />
                {errors.documents && <span className={styles.errorText}>{errors.documents}</span>}
                {formData.documents.length > 0 && (
                  <div className={styles.fileList}>
                    {formData.documents.map((file, i) => (
                      <span key={i} className={styles.fileItem}>
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Declaration */}
            <div className={styles.formSection}>
              <div className={styles.declaration}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  <span>
                    I hereby declare that the information provided above is true
                    and correct to the best of my knowledge. I understand that
                    any false information may lead to disqualification. *
                  </span>
                </label>
                {errors.declaration && <span className={styles.errorText}>{errors.declaration}</span>}
              </div>
            </div>

            <div className={styles.formActions}>
              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
