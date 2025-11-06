import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EditableTextProps {
  initialText: string;
  onTextChange: (newText: string) => void;
  className?: string;
  as?: "span" | "textarea";
}

const EditableText: React.FC<EditableTextProps> = ({
  initialText,
  onTextChange,
  className = "",
  as = "span",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Focus sur l'input quand on passe en mode édition
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Sélectionne tout le texte pour un remplacement facile
      if (as === "span") {
        (inputRef.current as HTMLInputElement).select();
      }
    }
  }, [isEditing, as]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text !== initialText) {
      onTextChange(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && as === "span") {
      setIsEditing(false);
      if (text !== initialText) {
        onTextChange(text);
      }
    } else if (e.key === "Escape") {
      setText(initialText);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`inline-block ${className}`}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        as === "textarea" ? (
          <Textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full"
          />
        ) : (
          <Input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full"
          />
        )
      ) : (
        <span
          className={`cursor-pointer hover:bg-gray-100 rounded px-1 py-0.5 ${className}`}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default EditableText;
