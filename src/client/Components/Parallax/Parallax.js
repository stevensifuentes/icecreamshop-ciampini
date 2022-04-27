import React from 'react';
import './style.css'

const Parallax = () => {
    return (
        <>
            <div className="mt-5">

            </div>
            <div className="parallax">
                <img 
                    width="100%" 
                    height="582" 
                    alt="Parallax"
                    src="https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador.png" 
                    className="vc_single_image-img attachment-full" 
                    loading="lazy" 
                    srcSet="https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-200x61.png 200w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-300x91.png 300w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-400x121.png 400w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-600x182.png 600w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-768x233.png 768w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-800x243.png 800w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-1024x310.png 1024w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador-1200x364.png 1200w, https://www.heladeriaelgulus.com/wp-content/uploads/2019/02/separador.png 1920w" 
                    sizes="(max-width: 1920px) 100vw, 1920px" />
            </div>
            <div className="mb-5">

            </div>
        </>
    );
}

export default Parallax;