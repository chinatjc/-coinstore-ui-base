type AlertType = 'success' | 'default' | 'danger' | 'warning';

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  closable?: boolean;
  onClose?: () => void;
}
