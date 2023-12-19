import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary alert-dismissible" role="alert">
            {children}{" "}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={onClose}
            />
        </div>
    );
};

export default Alert;
