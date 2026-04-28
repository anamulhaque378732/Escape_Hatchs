import { forwardRef, useImperativeHandle, useRef } from "react";


const MyInput = (props, ref) => {
    const realInputRef = useRef(null);

    // useImperativeHandle(ref, () => {
    //     return {
    //         focus() {
    //             realInputRef.current.focus();
    //         }
    //     };
    // });
    useImperativeHandle(ref, () => ({

        focus() {
            realInputRef.current.focus();
        }
    }));


    return (
        <div>
            <input {...props} ref={realInputRef} type="text" name="" id="" />
        </div>
    );
};
const ForwardedMyInput = forwardRef(MyInput);
export default ForwardedMyInput;