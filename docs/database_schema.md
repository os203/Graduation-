# PG Academy Database Schema

This document outlines the core tables and relationships for the PG Academy LMS.
This matches the initial requirements defined in the graduation project document.

## Tables
1. **users**
   - `id`, `name`, `email`, `password` (hashed), `role`
   - *Connects To:* courses, enrollments, certificates

2. **courses**
   - `id`, `title`, `description`, `thumbnail`, `price`, `status`, `instructorId`
   - *Connects To:* modules, enrollments, reviews

3. **modules**
   - `id`, `title`, `courseId`, `order`
   - *Connects To:* course → lessons

4. **lessons**
   - `id`, `title`, `videoPath`, `duration`, `moduleId`, `order`
   - *Connects To:* module, notes, quizzes

5. **enrollments**
   - `id`, `userId`, `courseId`, `enrolledAt`
   - *Connects To:* user, course

6. **progress**
   - `id`, `userId`, `lessonId`, `watchedPercent`, `lastPosition`
   - *Connects To:* user, lesson

7. **quizzes**
   - `id`, `title`, `lessonId`, `passingScore`, `maxAttempts`
   - *Connects To:* questions, attempts

8. **quiz_attempts**
   - `id`, `userId`, `quizId`, `score`, `passed`
   - *Connects To:* user, quiz

9. **certificates**
   - `id`, `userId`, `courseId`, `uniqueCode`, `issuedAt`
   - *Connects To:* user, course

10. **payments**
    - `id`, `userId`, `amount`, `type`, `status`, `stripeId`
    - *Connects To:* enrollment / subscription

11. **coupons**
    - `id`, `code`, `discountType`, `value`, `expiryDate`
    - *Connects To:* payments

12. **reviews**
    - `id`, `userId`, `courseId`, `rating`, `comment`
    - *Connects To:* user, course

13. **notifications**
    - `id`, `userId`, `message`, `type`, `isRead`
    - *Connects To:* user

14. **qa_questions**
    - `id`, `userId`, `lessonId`, `question`, `answer`
    - *Connects To:* user, lesson
