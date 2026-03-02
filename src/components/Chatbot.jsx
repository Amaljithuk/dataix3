import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaPaperPlane, FaRobot, FaCommentDots } from 'react-icons/fa';
import './Chatbot.css';

const WELCOME_MESSAGE = {
    role: 'assistant',
    content: "Hello! 👋 I'm **DX3 Advisor**, your enterprise technology guide.\n\nHow can I help you today?",
    isWelcome: true,
};

const QUICK_OPTIONS = [
    { label: 'Learn About ERP', value: 'Tell me about your ERP solutions.' },
    { label: 'Explore CRM', value: 'What CRM platforms do you offer?' },
    { label: 'Book a Consultation', value: 'I want to schedule a consultation.' },
    { label: 'Speak to Sales', value: 'I would like to speak to your sales team.' },
];

const SYSTEM_PROMPT = `You are DX3 Advisor, the intelligent assistant for DataiX3 — a business consulting and enterprise technology solutions company based in Kochi, India.

DataiX3 offers:
- ERP Solutions (finance, inventory, procurement, HR)
- CRM Platforms (sales pipeline, customer management)
- LMS Systems (corporate training, education)
- HR & Payroll Management Software
- Data Analytics & Business Intelligence
- Enterprise Web Development

Services: Business Consulting, Digital Transformation, Enterprise Architecture, Custom Software Development, Data Strategy.

Industries served: Manufacturing, Retail & E-commerce, Education, Healthcare, Corporate Enterprises, Financial Services.

Contact: connect@dataix3.com | +91 8590945369 | Kochi, Kerala, India

Keep responses concise, professional, and helpful. Always encourage users to schedule a consultation at /contact for detailed discussions. Never make up pricing or specific client names.`;

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [quickOptionsShown, setQuickOptionsShown] = useState(true);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    const sendMessage = async (text) => {
        const userText = text || input.trim();
        if (!userText || loading) return;

        setInput('');
        setQuickOptionsShown(false);
        setMessages((prev) => [...prev, { role: 'user', content: userText }]);
        setLoading(true);

        try {
            const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
            const model = import.meta.env.VITE_OPENROUTER_MODEL;

            const conversationHistory = messages
                .filter((m) => !m.isWelcome)
                .map((m) => ({ role: m.role, content: m.content }));

            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'DataiX3 DX3 Advisor',
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...conversationHistory,
                        { role: 'user', content: userText },
                    ],
                    max_tokens: 400,
                    temperature: 0.7,
                }),
            });

            const data = await response.json();
            const assistantReply = data?.choices?.[0]?.message?.content || 'I apologize, I encountered an issue. Please try again or contact us at connect@dataix3.com.';

            setMessages((prev) => [...prev, { role: 'assistant', content: assistantReply }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'I\'m having trouble connecting right now. Please reach out to us at connect@dataix3.com or call +91 8590945369.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const renderMessage = (content) => {
        // Simple markdown: bold text
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br/>');
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                className="chatbot-fab"
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open DX3 Advisor chatbot"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <FaTimes />
                        </motion.span>
                    ) : (
                        <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <FaCommentDots />
                        </motion.span>
                    )}
                </AnimatePresence>
                {!open && <span className="fab-label">DX3 Advisor</span>}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="chatbot-panel"
                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        {/* Header */}
                        <div className="chatbot-header">
                            <div className="chatbot-header-info">
                                <div className="chatbot-avatar"><FaRobot /></div>
                                <div>
                                    <strong>DX3 Advisor</strong>
                                    <span>DataiX3 AI Assistant</span>
                                </div>
                            </div>
                            <button className="chatbot-close" onClick={() => setOpen(false)}><FaTimes /></button>
                        </div>

                        {/* Messages */}
                        <div className="chatbot-messages">
                            {messages.map((msg, i) => (
                                <div key={i} className={`chat-msg ${msg.role}`}>
                                    <div
                                        className="chat-bubble"
                                        dangerouslySetInnerHTML={{ __html: renderMessage(msg.content) }}
                                    />
                                </div>
                            ))}

                            {/* Quick Options */}
                            {quickOptionsShown && (
                                <div className="quick-options">
                                    {QUICK_OPTIONS.map((opt) => (
                                        <button
                                            key={opt.label}
                                            className="quick-opt-btn"
                                            onClick={() => sendMessage(opt.value)}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Loading */}
                            {loading && (
                                <div className="chat-msg assistant">
                                    <div className="chat-bubble typing-indicator">
                                        <span /><span /><span />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* CTA Banner */}
                        <div className="chatbot-cta-banner">
                            <span>Ready to transform your business?</span>
                            <Link to="/contact" onClick={() => setOpen(false)}>Book a Consultation →</Link>
                        </div>

                        {/* Input */}
                        <div className="chatbot-input-row">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about our solutions..."
                                disabled={loading}
                            />
                            <button
                                className="send-btn"
                                onClick={() => sendMessage()}
                                disabled={loading || !input.trim()}
                                aria-label="Send message"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
