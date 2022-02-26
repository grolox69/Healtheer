/* eslint-disable react/display-name */
import { useForm } from "react-hook-form";

const withUseForm = (Component) => (props) => {
    const form = useForm();

    if (Component.prototype.render) {
        return <Component {...form} {...props} />
    }

    throw new Error(
        [
          "You passed a function component, `withUseForm` is not needed.",
          "You can `withUseForm` directly in your component.",
        ].join("\n")
      )
        
}

export default withUseForm;