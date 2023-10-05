import { toast } from 'react-toastify';

export const errorNotify = (msg) => toast.error(msg);

export const successNotify = (msg) => toast.success(msg);
