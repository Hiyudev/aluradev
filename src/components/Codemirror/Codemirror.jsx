import dynamic from 'next/dynamic'
const CodeMirror = dynamic(() => {
    import('codemirror/mode/xml/xml')
    import('codemirror/mode/javascript/javascript')
    import('codemirror/mode/css/css')
    import('codemirror/mode/htmlmixed/htmlmixed')
    import('codemirror/mode/python/python')
    import('codemirror/theme/monokai.css')
    import('codemirror/theme/cobalt.css')
    import('codemirror/theme/3024-day.css')
    import('codemirror/theme/3024-night.css')
    import('codemirror/theme/darcula.css')
    import('codemirror/theme/paraiso-dark.css')
    return import('react-codemirror')
  }, {ssr: false});

export default CodeMirror;