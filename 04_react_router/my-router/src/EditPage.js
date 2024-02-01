import {useParams, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useRecoilState, useRecoilValue} from "recoil";
import {idsAtom, artilceSelector} from "./logic/state";

export default function EditPage () {
    const {id} = useParams();
    const navigate = useNavigate();
    const ids = useRecoilValue(idsAtom);
    const newId = ('0' === id) ? Math.max(...(ids.length ? ids : [0])) + 1 : parseInt(id);
    const [article, setArticle] = useRecoilState(artilceSelector(newId));

    const defaultValues = {
      title: article?.title ?? '',
      subject: article?.subject ?? '',
    };

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
      defaultValues
    });

    const onSuc = (data, event) => {
      const submitButton = event.nativeEvent.submitter?.name;
      if ('button-cancel' === submitButton) {
        onCancel();
        return;
      }

      setArticle({
        id : newId,
        title: data.title,
        subject: data.subject
      });

      navigate('/article/' + newId);
    };
    
    const onErr = (err, event) => {
      const submitButton = event.nativeEvent.submitter?.name;
      if ('button-cancel' === submitButton) {
        onCancel();
        return;
      }
    };

    const onCancel = () => {
      reset(defaultValues);
    };

    // MEMO: ...register() の ... は可変引数。register() は、配列を返す
    return (
        <form onSubmit={handleSubmit(onSuc, onErr)} noValidate>
          <div>
            <label htmlFor="title">TITLE:</label> &nbsp;
            <span className="errorMsg">{errors.title?.message}</span>
            <br/>
            <input id="title" name="title" type="text" size="20"
            {...register('title',{
              required: 'titleは必須です',
              maxLength: {
                value: 20,
                message: 'titleは20文字以内にしてください'
              }
            })}
            />
          </div>
          <div>
            <label htmlFor="subject">SUBJECT:</label> &nbsp;
            <span className="errorMsg">{errors.subject?.message}</span>
            <br/>
            <textarea id="subject" name="subject" rows="25" cols="80"
            {...register('subject',{
              required: 'subjectは必須です',
            })}
            />
          </div>
          <div>
            <button type="submit" name="button-register">Register</button>
            &nbsp;
            <button type="submit" name="button-cancel">Cancel</button>
          </div>
        </form>
    );
}