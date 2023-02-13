import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

// JSX

// import './form-input.styles.scss';

// const FormInput = ({ label, ...otherProps }) => {
//   return (
//     <div className='group'>
//       <input className='form-input' {...otherProps} />
//       {label && (
//         <label
//           className={`${
//             otherProps.value.length ? 'shrink' : ''
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

// export default FormInput;
