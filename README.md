# Personal Portfolio  

## Description  
The Personal Portfolio is a modern and visually appealing portfolio website designed using **React**, **Tailwind CSS**, and other cutting-edge libraries. This project showcases personal or professional profiles with dynamically fetched content to ensure ease of maintenance and updates.  

---

## Live Demo  
Check out the live demo of the project here:  
[Personal Portfolio - Live Demo](https://rajesh-nagurla-portfolio.netlify.app/)  

---

## Contact Form Integration  
The contact form is powered by **Web3 Forms**, a serverless form-handling service. Users can submit inquiries directly through the form, and messages will be received seamlessly.

### To configure the form:

1. Register for an API key at [Web3 Forms](https://web3forms.com/).
2. Add your API key to a `.env` file:
    
   ```bash  
   VITE_ACCESS_KEY=your-api-key-here  
   ```  
4. The form is ready to use out of the box!  

### Sample Data  
Sample data for the projects and other sections are dynamically managed in `index.js`. You can add your images in the `assets` folder, and by modifying the `index.js`, the changes will reflect across all pages.  

---

## Technologies Used  
- **React**: A JavaScript library for building user interfaces.  
- **Vite**: A fast development build tool that provides an optimized development experience.  
- **Tailwind CSS**: A utility-first CSS framework for rapid styling and customization.  
- **Framer Motion**: A library for animations and motion design in React applications.  
- **React Toastify**: A library for displaying toast notifications in React applications.  

---

## Getting Started  

### Prerequisites  
Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/RAJESH2132/Personal-Portfolio.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd Personal-Portfolio  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Create a `.env` file for environment variables (optional):  
   ```bash  
   VITE_ACCESS_KEY=your-web3forms-api-key  
   ```  

---

## Usage  

### Running the Development Server  
To start the development server, run:  
```bash  
npm run dev  
```  
The app will be available at `http://localhost:3000`.  

### Building for Production  
To build the app for production:  
```bash  
npm run build  
```  
The production files will be available in the `dist` folder.  

### Previewing the Build  
To preview the production build locally:  
```bash  
npm run preview  
```  

---

## Scripts  
- **`dev`**: Starts the development server using Vite.  
- **`build`**: Builds the application for production.  
- **`lint`**: Lints the project files using ESLint.  
- **`preview`**: Serves the production build locally.  
