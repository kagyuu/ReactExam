import {useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';

export default function EditPage () {
    const {id} = useParams();
    const defaultValues = {
      title: '',
      subject: ''
    };

    const {register, handleSubmit, formState: {errors}} = useForm({
      defaultValues
    });

    const onsubmit = (data, event) => {
      const submitButton = event.nativeEvent.submitter?.name;
      console.log(data);
      console.log(submitButton);
    }
    const onerror = (err, event) => {
      const submitButton = event.nativeEvent.submitter?.name;
      console.log(err);
      console.log(submitButton);
    }

    // MEMO: ...register() の ... は可変引数。register() は、配列を返す
    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
          <div>
            <label htmlFor="title">TITLE:</label><br/>
            <input id="title" name="title" type="text" size="20"
            {...register('title',{
              required: 'titleは必須です',
              maxLength: {
                value: 20,
                message: 'titleは20文字以内にしてください'
              }
            })}
            />
            <div className="errorMsg">{errors.title?.message}</div>
          </div>
          <div>
            <label htmlFor="subject">SUBJECT:</label><br/>
            <textarea id="subject" name="subject" rows="25" cols="80"
            {...register('subject',{
              required: 'subjectは必須です',
            })}
            />
            <div className="errorMsg">{errors.subject?.message}</div>
          </div>
          <div>
            <button type="submit" name="button-register">Register</button>
            &nbsp;
            <button type="submit" name="button-cancel">Cancel</button>
          </div>
        </form>
    );
}