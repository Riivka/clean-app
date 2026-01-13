## Plan: Cleaning Schedule App (AI-Powered)

This app will help users create, manage, and maintain a personalized cleaning schedule using AI-driven chat, flexible task management, and actionable insights. It will follow industry standards for UX, modularity, and scalability.

### Steps
1. **Define Core Data Models**  
   - Design models for `User`, `Room`, `Task`, `Schedule`, `RandomTask`, and `Assignment` in [src/models](src/models).
   - Add user roles (`owner`, `member`), permissions, and edit rights to the `User` model.
2. **Set Up User Authentication & Management**  
   - Integrate Google Authentication for sign-in.
   - Implement user management:  
     - Owner can invite users (assigning `owner` or `member` roles).
     - Owner can set member edit permissions (edit: yes/no).
     - Each schedule is owned by a user with role `owner`.
3. **Set Up AI Chat Interface**  
   - Implement a chat UI in [src/components/Chat.jsx](src/components/Chat.jsx) for free-text Q&A, integrating with an AI backend for question flow and schedule draft generation.
4. **Build Plan Mode Workflow**  
   - Only accessible to users with `owner` role.
   - Create components for:  
     - Chat-based Q&A  
     - Draft schedule display and editing (drag/drop, add/remove, re-assign, edit answers)  
     - Random task management
5. **Implement Schedule Mode**  
   - Accessible to all users.
   - For `owner`: full access to all features.
   - For `member`:  
     - If edit permission is enabled: can move/delete/reassign their own tasks.  
     - If not: can only mark tasks as done, set a timer, set a reminder.
   - Develop views for daily/weekly/monthly schedules as checklists in [src/components/ScheduleView.jsx](src/components/ScheduleView.jsx).
   - Add features: assign/unassign tasks, reminders, timers (with time tracking/averaging), and random task selection logic.
6. **Develop Insights Mode**  
   - Accessible to all users.
   - Build a dashboard in [src/components/Insights.jsx](src/components/Insights.jsx) for suggestions, chat-based cleaning advice, and visual analytics (charts/graphs).
7. **Set Up State Management & Persistence**  
   - Use a state management library (e.g., Redux, Zustand) and local storage or backend for data persistence.
8. **Integrate AI Services**  
   - Connect to an AI API (e.g., OpenAI, Azure) for chat, schedule generation, and advice.
9. **Apply UI/UX Best Practices**  
   - Ensure responsive design, accessibility, and intuitive navigation.

### Further Considerations
1. Should the AI run locally or via a cloud API? (Privacy vs. capability)
2. Should notifications/reminders use browser APIs, email, or mobile push?
3. What charting/analytics library to use for insights (e.g., Chart.js, Recharts)?
4. Consider modularizing features for future mobile app support.
