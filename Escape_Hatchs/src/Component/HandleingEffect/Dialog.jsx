import { useEffect, useRef } from 'react';

const Dialog = () => {
    let dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog.showModal();

        // cleanup is mandatory
        return () => dialog.close();
    }, [])

    return (
        <div>
            <dialog ref={dialogRef}  > What a dialog, this an open dialog window  </dialog>
        </div>
    );
};

export default Dialog;