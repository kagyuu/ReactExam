import {useParams} from 'react-router-dom';
import {Form} from 'react-router-dom';

export default function EditPage () {
    const {id} = useParams();  
    return (
        <Form method='POST' noValidate>
          <div>
            <label htmlFor="title">TITLE:</label><br/>
            <input id="title" name="title" type="text" size="20"/>
            <input name="id" type="hidden" value={id}/>
          </div>
          <div>
            <label htmlFor="subject">SUBJECT:</label><br/>
            <textarea id="subject" name="subject" rows="25" cols="80"/>
          </div>
          <div>
            <button type="submit" name="button-submit" value="exec">Submit</button>
            &nbsp;
            <button type="submit" name="button-submit" value="cancel">Cancel</button>
          </div>
        </Form>
    );
}