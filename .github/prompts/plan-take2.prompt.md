## Plan: Cleaning Schedule App Architecture

Design a modern, scalable, AI-powered cleaning schedule app with three main modes (Plan, Schedule, Insights) and robust user management. The architecture will follow industry standards for modularity, maintainability, and extensibility.

### Steps
1. **Define Core Domain Models**  
   - User, Role, Task, Schedule, Room, Reminder, RandomTask, ChatMessage in [models/](src/models/) and [types/](src/types/).
2. **Design App Structure & Routing**  
   - Use a modular folder structure: [components/](src/components/), [constants/](src/constants/), [assets/](src/assets/).
   - Set up routing for Plan, Schedule, Insights, and Auth flows.
3. **Implement User Management & Auth**  
   - Integrate Google Authentication.
   - Define roles (owner, member) and permissions logic.
   - Owner can invite/manage users; member access is restricted per requirements.
4. **Plan Mode: AI-Driven Chat & Schedule Drafting**  
   - Build a chat interface for free-text Q&A with AI.
   - Generate/edit schedule drafts (CRUD, drag-and-drop, random tasks).
   - Allow returning to Q&A to update answers.
5. **Schedule Mode: Task Management & Reminders**  
   - Display schedules (daily/weekly/monthly/all) as checklists.
   - Support task assignment, reminders, timers, and task CRUD.
   - Integrate logic for random tasks and recurring tasks.
6. **Insights Mode: Suggestions, Chat, Dashboard**  
   - Analyze user/task data for suggestions.
   - Provide a chat for cleaning advice.
   - Display insights and graphs (dashboard).
7. **State Management & API Integration**  
   - Use a state management library (e.g., Redux, Zustand).
   - Plan for backend API endpoints (user, schedule, task, chat, insights).
   - Integrate AI (e.g., OpenAI API) for chat and suggestions.

### Further Considerations
1. **Tech Stack**: React + TypeScript (frontend), Express (backend), Firebase/Auth0 (auth), Supabase (data), OpenAI API (AI).
2. **AI Integration**: Clarify if AI should be cloud-based (OpenAI) or local.
3. **Mobile Support**: Consider responsive design or a future mobile app.
4. **Testing & CI/CD**: Plan for unit/integration tests and deployment pipelines.
5. **Data Privacy**: Ensure secure handling of user data and permissions.
6. **Scalability**: Design for multi-user households and future feature growth.

Please review and suggest any changes or preferences for tech stack, features, or priorities.