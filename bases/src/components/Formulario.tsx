import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  fullName: string;
  age: number;
}

export const Formulario = () => {
  const { email, fullName, age, formState, handleInputChange } =
    useForm<FormData>({
      email: '',
      fullName: '',
      age: 24,
    });

  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label
          htmlFor='email'
          className='form-label'
        >
          Email:
        </label>
        <input
          type='email'
          className='form-control'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='name'
          className='form-label'
        >
          Name:
        </label>
        <input
          type='text'
          className='form-control'
          name='fullName'
          value={fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3'>
        <label
          htmlFor='age'
          className='form-label'
        >
          Age:
        </label>
        <input
          type='number'
          className='form-control'
          name='age'
          value={age}
          onChange={handleInputChange}
        />
      </div>

      <pre>{JSON.stringify(formState, null, 4)}</pre>
    </form>
  );
};
