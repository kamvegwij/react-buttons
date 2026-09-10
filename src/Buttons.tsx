"use client";

import React from 'react';
import { motion } from "framer-motion";

export interface ButtonProps {
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title?: string;
    text?: string;
    icon?: React.ReactNode; // i recommend users use lucide-react for this
    isFill?: boolean;
    active?: boolean;
};

/* BUTTONS */
export const SaveButton: React.FC<ButtonProps> = ({ disabled, onClick, icon, text, title }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className="bg-nguni text-white rounded-md px-6 py-2 text-sm font-medium hover:bg-nguni/80 transition-colors"
        title={title}
    >{icon}{text}</button>
);
export const CancelButton: React.FC<ButtonProps> = ({ disabled, onClick, icon, text, title }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className={`flex items-center justify-between gap-1 px-4 py-2 bg-red-500 rounded-xs text-white text-xs font-bold`}
        title={title}
    >{icon}{text}</button>
);
export const MediaButton: React.FC<ButtonProps> = ({ onClick, icon, title, text, disabled }) => (
    <button
        disabled={disabled}
        title={title}
        aria-label={title ?? text}
        onClick={onClick}
        className="rounded-full px-3 py-3 text-sm bg-khala text-bone disabled:bg-khala/20 disabled:cursor-not-allowed"
    >
        {icon}{text}
    </button>
);
export const FillableButton: React.FC<ButtonProps> = ({onClick, icon, title, text, disabled, isFill}) => (
    <button
        disabled={disabled}
        title={title}
        onClick={onClick}
        className="
            relative overflow-hidden
            border border-khala
            rounded-md
            px-3 py-1.5
            text-sm
            flex items-center gap-2
        "
    >
        {/* animated fill */}
        <motion.div
            className="absolute inset-y-0 left-0 bg-khala z-0"
            initial={false}
            animate={{
                width: isFill ? "100%" : "0%"
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1]
            }}
        />

        {/* content */}
        <motion.span
            className="relative z-10 flex items-center gap-2"
            animate={{
                color: isFill
                    ? "var(--color-bone)"
                    : "var(--color-khala)"
            }}
            transition={{
                duration: 0.35
            }}
        >
            {icon}
            {text}
        </motion.span>
    </button>
);
export const ActionButton: React.FC<ButtonProps> = ({ onClick, icon, title, text, disabled }) => (
    <button
        disabled={disabled}
        title={title}
        onClick={onClick}
        className="border rounded-md px-3 py-1.5 text-sm"
    >
        {icon}{text}
    </button>
);
export const NavigationButton: React.FC<ButtonProps> = ({ onClick, icon, title, text, disabled, active }) => (
    <button
        disabled={disabled}
        title={title}
        onClick={onClick}
        className={`px-3 py-1.5 ${active ? 'text-umnyama md:text-md text-sm underline' : 'text-umnyama/70 md:text-sm text-[9px]'} disabled:text-umnyama/30 disabled:line-through`}
    >
        {icon}{text}
    </button>
);
export const PinButton: React.FC<ButtonProps> = ({ onClick, icon, title, disabled }) => (
    <button
        disabled={disabled}
        title={title}
        aria-label={title}
        onClick={onClick}
        className="absolute -top-1.5 -right-1.5 bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
    >
        {icon}
    </button>
);