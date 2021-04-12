import { useRef, useEffect } from 'react';
import './preview.css';

interface PreviewProps {
	code: string;
	errorStatus: string;
}

const html = `
    <html>
      <head>
      </head>
        <body>
          <div id="root"></div>
          <script>
          const handleError = (err) => {
            const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
              console.error(err);
            };
            window.addEventListener('error', (event) => {
              event.preventDefault();
              handleError(event.error);
            });

            window.addEventListener('message', (event) => {
              try {
                eval(event.data);
              } catch (err) {
                handleError(err);
              }
            }, false);
          </script>
        </body>
    </html>
  `;

export const Preview: React.FC<PreviewProps> = ({ code, errorStatus }) => {
	const iframe = useRef<any>();

	useEffect(() => {
		iframe.current.srcdoc = html;
		setTimeout(() => {
			iframe.current.contentWindow.postMessage(code, '*');
		}, 50);
	}, [code]);

	return (
		<div className='preview-wrapper'>
			<iframe
				ref={iframe}
				title='playground'
				srcDoc={html}
				sandbox='allow-scripts'
			/>
			{errorStatus && <div className='preview-error'>{errorStatus}</div>}
		</div>
	);
};
