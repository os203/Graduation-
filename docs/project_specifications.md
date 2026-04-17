# PG Academy LMS - Project Specifications

## 1.1 Overview
PG Academy is a unique AI Learning Management System designed explicitly for Arab markets. The platform offers students a centralized location to search, view courses, and complete quizzes, and earn certificates via an online interface. Security is included within the application, with a Role Based Access Structure (RBAC) limiting visibility based on whether the user is an Admin, Instructor, or Student. Student progression through the courses is very managed; the Instructors will determine what a passing score is and will lock the next lesson from the student until they achieve that score on the quiz. Once the students have met the requirements for the certificate, they will automatically receive a QR code on their certificate to allow for verification.

## 1.2 Problem Statement
When attempting to deliver online education, creators and institutions in the region face major limitations with existing platforms like Coursebox, Docebo, and Learn Upon. The primary issues are:
* Existing platforms are built predominantly for Western markets, lacking an Arab-first approach.
* These third-party platforms are expensive to operate.
* Using existing platforms forces institutions to store their private data on external servers rather than retaining ownership.

## 1.3 Proposed Solution
PG Academy provides an advanced, secure, and Arab-centric platform to eliminate these issues. The recommended solutions include:
* **Data sovereignty:** The platform only runs on PG Studios’ own server so that all data stays in house.
* **Intelligent AI assistant:** Embedded in every lesson is an AI chat panel, which reads the actual course material and then answers questions, summarizes material, or creates practice problems for the students.
* **Automating Progression Requirements:** Instructors can lock the following lesson until the student passes a quiz attached to that lesson, thereby enforcing a learning path.
* **Secure content delivery:** To protect intellectual property, the videos stream using HLS in smaller pieces, meaning that students cannot download the full files.
* **Centralized Administration:** Administrators control all content and can create bundles and use discount codes to manage their students.
* **Automated Payments:** The integration of Stripe payment processing allows for easy manual monitoring of single course purchases as well as monthly/annual subscription payments.

## 1.4 Related Works
Although Coursebox, Docebo, and Learn Upon are widely used as Learning Management Systems (LMS) at different institutions, each institution using these LMSs will have to make some form of trade-off; either in terms of cost, location/region or data ownership. By keeping all operations in-house and using a consolidated technology stack on a single instance of Azure VM using Next.js 14 and PostgreSQL, PG Academy provides a significant advantage over these traditional LMS platforms. PG Studios, therefore, has complete control over the pricing, content and security of their application. Additionally, PG Academy, unlike the other platforms mentioned, has incorporated the use of OpenAI and Azure AI with RAG capabilities into their application and can connect with proprietary and internal course data without needing to rely heavily on a query-based search engine.

| Feature | Coursebox | Docebo | Learn Upon | PG Academy |
| :--- | :---: | :---: | :---: | :---: |
| Content Delivery (Videos, Docs, etc.) | ✅ | ✅ | ✅ | ✅ |
| Role-Based Access (Admin, Instructor, Student) | ✅ | ✅ | ✅ | ✅ |
| Assessment-Based Progression Rules | ✅ | ✅ | ✅ | ✅ |
| Native Payment Integration (Subscriptions/E-commerce) | ✅ | ✅ | ✅ | ✅ |
| Automated Digital Certificate Validation (QR Codes) | ❌ | ❌ | ❌ | ✅ |
| Full Platform & Data Ownership (In-house servers) | ❌ | ❌ | ❌ | ✅ |
| Context-Aware AI Assistant (RAG trained on course) | ❌ | ❌ | ❌ | ✅ |
| Arab-First Market Focus | ❌ | ❌ | ❌ | ✅ |

## 1.5 Project Aim and Objectives
**Aim:**
The aim of the project is to create PG Academy, an intelligent, secure, Arab-first online learning management system (LMS). It will automate the delivery of structured content, assess the progression of users based on assessment results, process payments securely, and provide verified digital credentials, with all data and platform control retained through hosting the LMS on an internal server. 

**Objectives:** 
1. Deliver secured content and intelligent learning support by providing an automated means of managing multimedia-learning materials via secure HLS streaming to prevent unauthorised downloading, using an integrated contextually aware AI-based assistant that will read the course’s content to assist students, and require all quiz assessments to be completed successfully before allowing them to access the next lesson. 
2. Implement secure role-based access control by using secure JWT token authentication to establish distinct user accesses via Admin (Administrator), Instructor (Teacher) and Student (Student) dashboards, to ensure that each user is able to view and utilise only the tools provided to their role. 
3. Establish automated payment processing and verification of credentials via integration with Stripe to facilitate the online purchase of both single courses, course bundles and subscriptions, and to automate the issuance of verified digital certificates with unique reference numbers automatically created upon the successful completion of a course.
4. To build a sovereign, secure, and reliable architecture To promote system security and data sovereignty by deploying a unified frontend and backend utilizing Next.js 14, PostgreSQL, and Prisma ORM on a single, institution-owned Azure VM , ensuring strict protections against vulnerabilities like SQL injection and maintaining an encrypted, user-friendly experience.

## 1.6 Technology and Tools Used
Everything runs on a single Azure VM (Ubuntu). Keep it simple: one server, one codebase.

| What | Technology | Why |
| :--- | :--- | :--- |
| Frontend + Backend | Next.js 14 | One project for both the website and the API. |
| Database | PostgreSQL + Prisma ORM | Reliable. Prisma prevents SQL injection automatically. |
| Video Streaming | HLS via Nginx | Videos stream in chunks; cannot be downloaded directly. |
| Login / Sessions | JWT Tokens | Secure. Tokens expire automatically. |
| AI Assistant | OpenAI API / Azure Ai + RAG | AI reads the course content before answering students. |
| Web Server | Nginx | Routes traffic, HTTPS, serves video securely. |
| Hosting | Azure VM - Ubuntu 22.04 | PG Studios owns the server. Data stays in-house. |
| Payments | Stripe | Most documented payment API. Easy to integrate. |
| Keep app running | PM2 | Restarts the app automatically if it crashes. |

## 1.7 Methodology
### 1.7.1 Agile Methodology
The Annual PG Academy Project was the means by which the Zarqa University Development Team adopted an Agile Approach to work on their graduation project. This allowed for flexibility in being able to work iteratively on the Development of features according to a strict 10-step order as required by the Product Owner (PO). By utilizing Agile Practices, the members of the Development Team were able to prioritize tasks, continuously track progress throughout each of the consecutive Development Phases (i.e. Server Setup/Authentication; AI Assistant; Payment Integrations), to ensure that they would meet the requirements of the "Done When" criteria established for each Phase.
Utilizing Agile allowed us to improve the Development Team's ability to work collaboratively together as a Unit, while also maintaining consistent, and effective communication across the Tri-Partnership (PG Studios-Product Owner, Zarqa University, and Coordinating Partner). Implementing an Agile methodology also allowed the Development Team to provide High-Quality Secure Features on-time, and for the Development Team to quickly adapt to any technical issues that arose during Development while completely adhering to the mandatory Security and Architectural Requirements that needed to be met prior to launching the Product.

### 1.7.2 Why use Agile
1. **Flexibility:** By being agile, teams can quickly modify and adapt their platform to the input they receive, keeping them aligned with PG Studios’ vision and combatting the unique requirements of the Arab market.
2. **Collaboration:** Ongoing and consistent communication allows for effective three-way collaboration between the product owner, the Zarqa University development team (who provides programming services), and the coordination partner. This enables the team to effectively address and resolve technical challenges without unnecessary delay.
3. **Continuous Improvement:** Because the project is developed using iterative development cycles, ongoing improvements to project processes happen, and each phase of the overall project is built on the prior phase and there is no jumping ahead in phases.
4. **Faster Delivery:** Incremental development guarantees that the basic modules required for functionality (e.g., user authentication and secure video streaming) are completely developed and functional before moving on to developing more complex integrations (e.g., integrating the OpenAI Assistant and enabling Stripe for credit card processing).
5. **Clear Goals:** Each development phase is purely focused on achieving the “Done when...” definition as laid out in the mandatory 10-step development/build order and therefore keeps the project on track and increases team productivity.
6. **Transparency:** Day-to-day updates provide an avenue for open and honest dialogue, which results in trust between the developers, the product owner, and the in-house team responsible for implementing Sovereignty principles.
7. **Increased Quality:** Continuous testing and developer feedback of the platform will ensure compliance with all security standards/regulations including (but not limited to): HTTPS; prevention of SQL injection; rate limiting; and end-to-end testing.

## Chapter Two: System Analysis

### 2.1 Introduction 
The analysis phase is vitally important to the success of the project because it provides an extensive analysis of how education is currently delivered, how users believe the problem should be solved, and many times how the proposed solution conforms to technical requirements. Utilizing structured methods and gathering requirements from the product owner, we discover significant issues with the third-party platforms currently being used and identify where to make structural improvements to them. In this phase, we take broad business requirements, e.g., Arab First – complete data sovereignty, and break them down into clear technical requirements, while identifying and mitigating as many risks as possible at this early stage of the project. The deliverables produced from this phase, including clear definitions of user roles, structured database schemas, and strict build order blueprints are the foundation of the development process. Following this comprehensive phase ensures that the development of a secure, intelligent, and well-integrated Learning Management System (LMS) will adhere to PG Studios' business goals and meet the needs of the learner.

### 2.2 Stakeholder analysis 
#### 2.2.1 User Roles
| Role | Who is this? | What can they do? |
| :--- | :--- | :--- |
| Admin | The platform owner. | Full control: courses, users, payments, analytics, settings. |
| Instructor | A course creator assigned by Admin. | Manage their own courses. View their students' progress. |
| Student | A learner who registers on the platform. | Browse courses, enroll, watch videos, take quizzes, earn certificates. |

**Quick permission reference:**
| Action | Admin | Instructor | Student |
| :--- | :---: | :---: | :---: |
| Create / edit / delete courses | ✅ | ✅ own only | ❌ |
| Upload videos | ✅ | ✅ own only | ❌ |
| Create quizzes | ✅ | ✅ own only | ❌ |
| Manage all users | ✅ | ❌ | ❌ |
| View financial data | ✅ | ❌ | ❌ |
| Watch videos / take quizzes | ✅ | ✅ | ✅ |
| Use AI Assistant | ✅ | ✅ | ✅ |
| Earn certificates | ❌ | ❌ | ✅ |

### 2.3 Requirement Elicitation Techniques
1. **Stakeholder Interviews and Document Analysis:** Engaged directly with PG Studios (the product owner), who provided the overarching project vision and core requirements. Through continuous communication and analysis of their initial business needs, we transformed broad goals into the strict technical specifications and mandatory security protocols required for the platform.
2. **Competitive Observation:** Evaluated existing third-party LMS platforms such as Coursebox, Docebo, and Learn Upon. This observation helped the team identify key market pain points—specifically that these platforms are expensive, built primarily for Western markets, and force institutions to store private data on external servers.
3. **Prototyping:** Developed architectural models and user interface wireframes for the Admin Dashboard, Instructor Portal, and Student course player. This allowed stakeholders to visualize the learning flow, access controls, and overall user experience, enabling them to provide early feedback before actual coding commenced.
4. **Brainstorming and Technical Feasibility Sessions:** Held internal brainstorming sessions within the Zarqa University development team to explore the technical implementation of complex features. These sessions were critical for determining the best approach to integrate the OpenAI Assistant using RAG, establish secure HLS video streaming, and enforce strict database security using Prisma ORM.

### 2.4 Functional Requirements
**1-Login & Registration**
* Register with name, email, and password. Passwords are stored encrypted.
* Login returns a secure token (JWT). Tokens expire after 15 minutes for security.
* Password reset via email link.
* Every page/API checks the user's role before showing content.

**2-Course Management**
* Create courses: title, description, thumbnail, price, category.
* Organize into Modules → Lessons. Drag to reorder.
* Each lesson: video + text + downloadable files.
* Courses are either Draft (hidden) or Published (visible to students).
* Admin assigns instructors to courses.

**3-Video Streaming**
* Videos stored in a private folder - not accessible by direct URL.
* Backend checks enrollment before giving access to any video.
* Videos stream in chunks (HLS) - students cannot download full files.
* Player supports speed control (0.5x–2x) and remembers where you stopped.

**4-AI Assistant**
* Chat panel inside every lesson - visible to enrolled students only.
* AI reads the actual course content before answering (not the general internet).
* Students can ask it to summarize the lesson or generate practice questions.

**5-Quizzes**
* Attach a quiz to any lesson or module.
* Question types: multiple choice, true/false.
* Instructor sets passing score and max attempts.
* Student sees results immediately. Instructor can lock next lesson until quiz is passed.

**6-Payments**
* Buy individual courses (one-time) or subscribe monthly / annually.
* Admin creates bundle packages (multiple courses, one price).
* Admin creates coupon codes with percentage or fixed discounts.
* Email invoice sent after every successful payment.
* Admin sees financial dashboard: revenue, subscriptions, sales per course.

**7-Student Experience**
* Dashboard: all enrolled courses with progress percentages.
* Private notes per lesson (only the student sees them).
* Wishlist: save courses to buy later.
* Leave a star rating and review after completing a course.
* Q&A: post questions under any lesson. Instructors reply.

**8-Instructor Portal**
* See all students in your courses with their progress and quiz scores.
* Download student performance as CSV.
* Reply to student Q&A questions.

**9-Admin Dashboard**
* KPIs: total users, revenue, active subscriptions, top courses.
* Full course builder with drag-and-drop lesson ordering.
* User management: assign roles, manually enroll students.
* Coupon and bundle management.

### 2.5 Non-Functional Requirements
**1-Performance:**
* Video Streaming: The system must efficiently stream videos in chunks using HTTP Live Streaming (HLS) via Nginx to ensure smooth playback while preventing direct file downloads.
* Player Capabilities: The video player must support variable playback speeds (0.5x–2x) and automatically remember where the user stopped watching.

**2-Scalability & Architecture:**
* Unified Codebase: The platform must maintain a streamlined architecture using Next.js 14, which serves as a single project for both the frontend website and the backend API.
* Data Sovereignty: To keep data strictly in-house, the entire system must be deployed and run on a single Azure Virtual Machine (Ubuntu 22.04) owned by PG Studios.

**3-Availability & Reliability:**
* Process Management: The application must utilize PM2 to keep the platform running continuously; it must automatically restart the application if it crashes.
* Disaster Recovery: Automated daily database backups must be implemented, creating a PostgreSQL dump in a separate folder to recover from any accidental data loss.

**4-Security:**
| Requirement | Why it matters | How to do it |
| :--- | :--- | :--- |
| HTTPS everywhere | Encrypts all traffic between user and server. | Let's Encrypt SSL on Nginx. |
| Encrypted passwords | If the database leaks, passwords stay safe. | Hash with bcrypt before saving. |
| Token expiry | Stolen tokens stop working quickly. | JWT: 15 min access + 7 day refresh cookie. |
| SQL injection protection | Prevent attackers from reading/deleting data. | Use Prisma - never raw SQL with user input. |
| Rate limiting | Stop bots from brute-forcing login. | Max 10 login attempts per minute (Nginx). |
| Video access control | Only enrolled students watch videos. | Backend validates enrollment → issues signed time-limited URL. |
| Daily database backup | Recover from accidental data loss. | Automated PostgreSQL dump to a separate folder. |

**5-Maintainability:**
* Simplicity: The project must adhere to the principle of "keep it simple — one server, one codebase" to ensure updates and maintenance are straightforward for the development team.

**6-Usability:**
* Market Focus: The platform must be built with an "Arab-First" design philosophy, specifically catering to the needs and preferences of users in the Arab market.
* Role-Specific Experience: The user interface must provide clear, distinct, and intuitive dashboards tailored for Admins, Instructors, and Students, ensuring each user type sees only the tools and data relevant to their specific permissions.

### 2.6 Database Analysis
**1-Database Tables**
| Table | Key Fields | Connects To |
| :--- | :--- | :--- |
| users | id, name, email, password (hashed), role | courses, enrollments, certificates |
| courses | id, title, description, thumbnail, price, status, instructorId | modules, enrollments, reviews |
| modules | id, title, courseId, order | course → lessons |
| lessons | id, title, videoPath, duration, moduleId, order | module, notes, quizzes |
| enrollments | id, userId, courseId, enrolledAt | user, course |
| progress | id, userId, lessonId, watchedPercent, lastPosition | user, lesson |
| quizzes | id, title, lessonId, passingScore, maxAttempts | questions, attempts |
| quiz_attempts | id, userId, quizId, score, passed | user, quiz |
| certificates | id, userId, courseId, uniqueCode, issuedAt | user, course |
| payments | id, userId, amount, type, status, stripeId | enrollment / subscription |
| coupons | id, code, discountType, value, expiryDate | payments |
| reviews | id, userId, courseId, rating, comment | user, course |
| notifications | id, userId, message, type, isRead | user |
| qa_questions | id, userId, lessonId, question, answer | user, lesson |
