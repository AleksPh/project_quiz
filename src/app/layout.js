import '../styles/style.css';
import { ProgressProvider } from '../app/context/ProgressContext'; 
import { AnswersProvider } from './context/AnswerContext';

export const metadata = {
  title: "Quizz",
  description: "Quizz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>
          <AnswersProvider>
            {children}
          </AnswersProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
