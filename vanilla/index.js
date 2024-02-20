const examples = [
    'class',
    'promise',
    'callback',
    'callback-to-promise',
    'async',
    'json',
    'hoisting',
    'operator',
    'function',
    'object',
    'array',
    'arrayAPIs',
    'arrayAPIsAnswer',
];

const addButton = (args) => {
    args.forEach((element) => {
        const button = document.createElement('button');
        button.innerText = element;
        button.addEventListener('click', () => addScript(element));
        document.querySelector('body').appendChild(button);
    });
};

const addScript = (element) => {
    const script = document.createElement('script');
    script.setAttribute('src', `examples/${element}.js`);
    document.querySelector('head').appendChild(script);
};

addButton(examples);