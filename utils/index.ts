import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export function ShowMessage(message: any, isError: boolean) {
  if (isError) {
    return toast(message, {
      position: "bottom-right",
      theme: "auto",
      dangerouslyHTMLString: true,
      type: "error",
      autoClose: 10000,
    });
  } else {
    return toast(message, {
      position: "bottom-right",
      type: "success",
      theme: "auto",
      dangerouslyHTMLString: true,
      autoClose: 10000,
    });
  }
}

export function signOut() {
  // Function to delete a cookie by name
  function deleteCookie(name: any) {
    document.cookie =
      name + "=; Max-Age=0; path=/; domain=" + window.location.hostname;
  }

  deleteCookie("auth.token"); // Adjust the cookie name if different
  window.location.reload();
}
