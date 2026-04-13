# PG Academy Agile Roadmap & Estimates

This timeline is based on **Developer Days (Dev Days)** as the estimation metric.  
*(1 Dev Day = 1 developer writing code for ~4–6 productive hours)*

With a team of 4 developers, there are roughly **20 to 24 Dev Days available per week**, depending on university schedules.

---

## 🏃 Sprint 1: Foundation & Infrastructure (Weeks 1 & 2)
**Total Estimated Effort:** ~16 Dev Days

* **Task 1.1: Server Setup (Azure, Ubuntu, Nginx, SSL)** `3 Dev Days`
  * **Notes:** Setting up the VM, installing Node.js/PM2, and configuring Let's Encrypt.
* **Task 1.2: Prisma DB Schema Generation** `2 Dev Days`
  * **Notes:** Writing the initial models for users, courses, modules, and lessons. Nailing these relational data structures early prevents messy data migrations later. *(✅ Initial implementation completed)*
* **Task 1.3: Next.js Auth (JWT, bcrypt, UI)** `8 Dev Days`
  * **Notes:** Building the login/register frontend and the backend logic. Implementing the strict 15-minute JWT expiry and refresh token logic will take the bulk of this time.
* **Task 1.4: Role-Based Routing Middleware** `3 Dev Days`
  * **Notes:** Writing Next.js middleware to securely route the Admin, Instructor, and Student roles and block unauthorized access.

---

## 🏃 Sprint 2: The Learning Engine (Weeks 3 & 4)
**Total Estimated Effort:** ~24 Dev Days

* **Task 2.1: Course Builder (UI & API)** `8 Dev Days`
  * **Notes:** Building the interfaces for admins and instructors to create courses, add modules, and order lessons.
* **Task 2.2: Student Consumption Views** `6 Dev Days`
  * **Notes:** Building the student dashboard showing enrolled courses and the lesson player layout.
* **Task 2.3: Quizzes & Progression Logic** `10 Dev Days`
  * **Notes:** Implementing the database logic for multiple-choice and true/false questions, grading them, and locking the next lesson until passed. 
  * **Architecture Tip:** When defining your TypeScript interfaces for different quiz question types, leveraging polymorphism here rather than massive switch statements will keep your code clean and prevent common code smells.

---

## 🏃 Sprint 3: The Heavy Lifters (Weeks 5 & 6)
**Total Estimated Effort:** ~24 Dev Days

* **Task 3.1: HLS Video Integration** `14 Dev Days`
  * **Notes:** This is the hardest task. It requires configuring Nginx to stream videos in chunks, ensuring videos remain in a private folder, and validating enrollment on the backend before issuing access. Dedicate your two strongest backend developers to this.
* **Task 3.2: Stripe Payments** `10 Dev Days`
  * **Notes:** Integrating the checkout for single courses and subscriptions, plus handling asynchronous webhooks to automatically create an enrollment record upon successful payment.

---

## 🏃 Sprint 4: Platform Management & Polish (Week 7)
**Total Estimated Effort:** ~16 Dev Days

* **Task 4.1: Dashboards (Admin & Instructor)** `8 Dev Days`
  * **Notes:** Fetching KPI data for total users and revenue, and building the tables for instructors to track student progress.
* **Task 4.2: Automated Certificates** `4 Dev Days`
  * **Notes:** Generating a digital certificate with a unique verification code when a student hits 100% completion.
* **Task 4.3: Notifications & Q&A** `4 Dev Days`
  * **Notes:** Setting up email invoices and the lesson Q&A board.

---

## 🏃 Sprint 5: AI & Final QA (Week 8)
**Total Estimated Effort:** ~20 Dev Days

* **Task 5.1: AI Assistant (RAG)** `8 Dev Days`
  * **Notes:** Integrating the OpenAI/Azure API so it exclusively reads course content to answer student questions. (If attempted)
* **Task 5.2: Final QA & Security Sweep** `12 Dev Days`
  * **Notes:** The entire team stops building new features. Run end-to-end tests, verify that Prisma is actively stopping SQL injection, and ensure Nginx is successfully limiting login rate attempts.
