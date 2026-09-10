"use client";
import React from 'react';
import "../styles/buttons.css";

export interface ButtonProps {
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title?: string;
    text?: string;
    icon?: React.ReactNode;
    isFill?: boolean;
    active?: boolean;
};

/* BUTTONS */
export const SaveButton: React.FC<ButtonProps> = ({ disabled, onClick, icon, text, title }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className="kamve__space__btn kamve__space__btn-save"
        title={title}
    >{icon}{text}</button>
);
export const CancelButton: React.FC<ButtonProps> = ({ disabled, onClick, icon, text, title }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className="kamve__space__btn kamve__space__btn-cancel"
        title={title}
    >{icon}{text}</button>
);
export const MediaButton: React.FC<ButtonProps> = ({ onClick, icon, title, text, disabled }) => (
    <button
        disabled={disabled}
        title={title}
        aria-label={title ?? text}
        onClick={onClick}
        className="kamve__space__btn kamve__space__btn-media"
    >
        {icon}{text}
    </button>
);
export const FillableButton: React.FC<ButtonProps> = ({onClick, icon, title, text, disabled}) => (
    <button
        disabled={disabled}
        title={title}
        onClick={onClick}
        className="kamve__space__btn kamve__space__btn-fillable"
    >
        {/* animated fill */}
        <div className="kamve__space__btn-fillable__fill" />

        {/* content */}
        <span className="kamve__space__btn-fillable__content">
            {icon}
            {text}
        </span>
    </button>
);
export const ActionButton: React.FC<ButtonProps> = ({ onClick, icon, title, text, disabled }) => (
    <button
        disabled={disabled}
        title={title}
        onClick={onClick}
        className="kamve__space__btn kamve__space__btn-action"
    >
        {icon}{text}
    </button>
);
export const NavigationButton: React.FC<ButtonProps> = ({ onClick, icon, title, text, disabled, active }) => (
    <button
        disabled={disabled}
        title={title}
        onClick={onClick}
        className={`kamve__space__btn kamve__space__btn-nav ${active ? 'kamve__space__btn-nav--active' : 'kamve__space__btn-nav--inactive'}`}
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
        className="kamve__space__btn kamve__space__btn-pin"
    >
        {icon}
    </button>
);