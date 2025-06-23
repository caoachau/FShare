"use client"

import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import DocumentsPage from "./pages/DocumentsPage"
import DocumentDetailPage from "./pages/DocumentDetailPage"
import NewsPage from "./pages/AllNewsPage"
import AllWorkshopsPage from "./pages/AllWorkshopsPage"
import UploadPage from "./pages/UploadPage"
import UserAccountPage from "./pages/UserAccountPage"
import GetStartedPage from "./pages/GetStartedPage"
import AboutPage from "./pages/AboutPage"
import TeacherPage from "./pages/TeacherPage"
import ContactPage from "./pages/ContactPage"
import TermsPage from "./pages/TermsPage"
import PrivacyPage from "./pages/PrivacyPage"
import HelpCenterPage from "./pages/HelpCenterPage"
import FeedbackPage from "./pages/FeedbackPage"
import ReportPage from "./pages/ReportPage"
import NewsDetailPage from "./pages/NewsDetailPage"
import WorkshopUploadPage from "./pages/WorkshopUploadPage"
import AdminDashboard from "./pages/AdminDashboard"
import AdminRoute from "./components/AdminRoute"
import "./App.css"

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<HomePage />} /> // Home page
                            <Route path="/documents" element={<DocumentsPage />} /> // All documents page
                            <Route path="/document/:id" element={<DocumentDetailPage />} /> // Document detail page
                            <Route path="/news" element={<NewsPage />} /> // All news page
                            <Route path="/news/:id" element={<NewsDetailPage />} /> // News detail page
                            <Route path="/workshops" element={<AllWorkshopsPage />} /> // All workshops page
                            <Route path="/upload" element={<UploadPage />} /> // Upload page
                            <Route path="/account" element={<UserAccountPage />} />
                            <Route path="/get-started" element={<GetStartedPage />} />
                            <Route path="/workshop-upload" element={<WorkshopUploadPage />} />


                    <Route
                    path="/admin"
                    element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                    }
                    />

                            {/* Footer Pages */}
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/teacher" element={<TeacherPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/help" element={<HelpCenterPage />} />
                            <Route path="/feedback" element={<FeedbackPage />} />
                            <Route path="/report" element={<ReportPage />} />
                        </Routes>
                    </Layout>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App
