/*tinymce.init({
    selector: 'textarea#default',
    width: 1000,
    height: 300,
    Plugin:[
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
    'bullist numlist outdent indent | link image | print preview media fullscreen |' +
    'forecolor backcolor emoticons',
    menu:{
        favs: {title: 'menu', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table',
    content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}'
});*/
tinymce.init({
    selector: 'textarea#default',
    plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
    menubar: 'file edit view insert format tools table help',
    content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}',
    toolbar_sticky: true
});