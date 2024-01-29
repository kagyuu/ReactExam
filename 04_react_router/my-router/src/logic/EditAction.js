import { redirect } from "react-router-dom"

export default async function EditAction ({request}) {
    const form = await request.formData();
    console.log(request);
    console.log(form);
    console.log('ID=' + form.get('id'));
    console.log('TITLE=' + form.get('title'));
    console.log('SUBJECT=' + form.get('subject'));
    console.log('button-submit=' + form.get('button-submit'));
    console.log(form.keys());

    return redirect('/');
}