import React, { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddPage = () => {
    useEffect(() => {
        // Initialize Quill editor
        const quill = new Quill('#editor-container', {
            theme: 'snow',
        });

        // Handle form submission safely
        const form = document.querySelector('form');
        if (form) {
            form.onsubmit = () => {
                // Use type assertion to specify the element type
                const contentInput = document.querySelector('input[name="content"]') as HTMLInputElement;
                if (contentInput) {
                    contentInput.value = quill.root.innerHTML;
                }
            };
        }
    }, []);
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Add Tasks</title>
                <link rel="stylesheet" href="/../Tasks/client/src/styles/App.css" />
                <link href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" rel="stylesheet" />
            </div>
            <div>
                <div className="add-task">
                    <h1>Add new task</h1>
                    <form action="/add" method="post" encType="multipart/form-data">
                        <input type="text" name="title" placeholder="Title" required />
                        <input type="text" name="category" placeholder="Category" />
                        <div id="editor-container" style={{ height: '200px' }}></div>
                        <input type="hidden" name="content" id="content" />
                        <input type="file" name="image" accept="image/*" />
                        <button type="submit">Add task</button>
                    </form>
                    <a href="/">Back To Home</a> 
                </div>     
            </div>
        </>
    );
};

export default AddPage;
