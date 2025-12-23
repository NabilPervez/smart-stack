import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import styles from './GameCard.module.css';

interface GameProps {
    id: string;
    title: string;
    category: string;
    url: string;
    accentColor: string;
    icon: React.ReactNode;
    index: number;
}

export const GameCard = ({ id, title, category, url, accentColor, icon, index }: GameProps) => {
    const [isExpanding, setIsExpanding] = useState(false);

    const handleClick = () => {
        setIsExpanding(true);
        setTimeout(() => {
            window.location.href = url;
        }, 800);
    };

    return (
        <motion.div
            layoutId={`card-container-${id}`}
            className={styles.card}
            style={{
                zIndex: isExpanding ? 50 : 1,
                position: isExpanding ? 'fixed' : 'relative',
                inset: isExpanding ? 0 : 'auto',
                width: isExpanding ? '100vw' : '100%',
                height: isExpanding ? '100vh' : 'auto',
                maxWidth: isExpanding ? 'none' : '24rem',
                margin: isExpanding ? 0 : undefined,
                borderRadius: isExpanding ? 0 : '1.5rem',
            }}
            onClick={handleClick}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // Custom bezier for "smooth physics"
                delay: index * 0.1
            }}
        >
            {/* Background Layer */}
            <motion.div
                className={styles.cardBg}
                animate={{
                    boxShadow: isExpanding
                        ? `0 0 100px 20px ${accentColor}40`
                        : `0 10px 30px -10px ${accentColor}20`
                }}
                whileHover={!isExpanding ? {
                    boxShadow: `0 20px 40px -10px ${accentColor}40`,
                } : {}}
            />

            {/* Content */}
            <motion.div
                className={styles.cardContent}
                animate={{
                    alignItems: isExpanding ? 'center' : 'flex-start',
                    justifyContent: isExpanding ? 'center' : 'space-between'
                }}
            >
                <div className={styles.header}>
                    <motion.div
                        className={styles.iconWrapper}
                        style={{ background: `${accentColor}15`, color: accentColor }}
                        layoutId={`icon-${id}`}
                    >
                        {icon}
                    </motion.div>

                    {!isExpanding && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <ExternalLink className={styles.externalIcon} />
                        </motion.div>
                    )}
                </div>

                <div style={{ textAlign: isExpanding ? 'center' : 'left' }}>
                    <motion.span
                        className={styles.category}
                        style={{ color: accentColor }}
                        layoutId={`cat-${id}`}
                    >
                        {category}
                    </motion.span>
                    <motion.h3
                        className={styles.title}
                        layoutId={`title-${id}`}
                        style={{
                            fontSize: isExpanding ? '4rem' : '2rem'
                        }}
                    >
                        {title}
                    </motion.h3>
                </div>

                {isExpanding && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.initializing}
                    >
                        INITIALIZING STACK LINK...
                    </motion.div>
                )}
            </motion.div>

            {/* Glow effect gradient */}
            <div
                className={styles.glow}
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${accentColor}, transparent 70%)`
                }}
            />
        </motion.div>
    );
};
