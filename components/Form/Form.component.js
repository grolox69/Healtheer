import { PureComponent } from 'react';

export class Form extends PureComponent {

    render() {
        const {
            children,
            attr,
            handleSubmit,
            onSubmit
        } = this.props;

        return (
            
            <form
                { ...attr }
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >     
                { children }       
            </form>
            
        );
    }
}

export default Form;
