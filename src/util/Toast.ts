import Toast from "react-native-tiny-toast";

interface ToastProps {
  message: string;
  onHide?: Function;
  duration?: number;
}

export const showErrorToast = (props: ToastProps) => {
  return Toast.show(props.message, {
    position: Toast.position.TOP,
    duration: props.duration ? props.duration : 5000,
    containerStyle: { zIndex: 1000 },
  });
};

export const showSuccessToast = (props: ToastProps) => {
  return Toast.showSuccess(props.message, { onHidden: props.onHide });
};

export const showDefaultToast = (props: ToastProps, width: any = 310) => {
  return Toast.show(props.message, {
    position: Toast.position.CENTER,
    duration: props.duration ? props.duration : 4000,
    containerStyle: {
      width: width,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
  });
};

