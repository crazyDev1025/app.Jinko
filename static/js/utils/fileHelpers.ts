// import html2canvas from "html2canvas";
/**
* Convert BASE64 to BLOB
* @param base64Image Pass Base64 image data to convert into the BLOB
*/

export function convertBase64ToBlob(base64Image: string) {
    // Split into two parts
    const parts = base64Image.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
        uInt8Array[i] = decodedData.charCodeAt(i);
    }

    // Return BLOB image after conversion
    return new Blob([uInt8Array], { type: imageType });
}

/**
* Convert BLOB to File
* @param blob Pass BLOB image data to convert into the File
* @param fileName Pass File Name
*/

export function convertBlobToFile(blob, fileName) {
    const file = new File([blob], fileName, { type: blob.type });
    return file;
}

/**
* Convert File to Base64
* @param file Pass File to convert into the Base64
*/

export function convertFileToBase64(file): Promise<string | null | ArrayBuffer> {
    return new Promise(resolve => {
        // Make new FileReader
        const reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            resolve(reader.result);
        };
    });
}


/**
 * Convert BLOB to Base64
 * @param blob Pass BLOB image data to convert into the Base64
 * @returns
 * @description
 * 1. Convert BLOB to Base64 string
 * 2. Create an Image and set the Base64 string as a src
 * 3. Resolve the converted Base64 string
*/

export function convertBlobToBase64(blob): Promise<string | null> {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = typeof reader.result === "string" ? reader.result.split(',')[1] : "";
            const dataURL = `data:${blob.type || 'application/octet-stream'};base64,${base64String}`;
            resolve(dataURL);
        };
        reader.readAsDataURL(blob);
    });
}

/**
 * Compute voice length
 * @param file Pass voice file to compute the length
 * @returns
 * @description
 * 1. Create an Audio object
 * 2. Add event listener to get the duration
 * 3. Revoke the object URL
 * 4. Resolve the duration
 */

export function computeVoiceLength(file): Promise<number> {
    return new Promise((resolve) => {
        const objectURL = URL.createObjectURL(file);
        const mySound = new Audio(objectURL);
        mySound.addEventListener(
            "canplaythrough",
            () => {
                URL.revokeObjectURL(objectURL);
                resolve(mySound.duration);
            },
            false,
        );
    });
}

/**
 * get dimensions of image
 * @param file Pass image file to get the dimensions
 * @returns
 * @description
 * 1. Create an Image object
 * 2. Add event listener to get the dimensions
 * 3. Revoke the object URL
 * 4. Resolve the dimensions
 */

export function getImageDimensions(file): Promise<{ width: number, height: number }> {
    return new Promise((resolve) => {
        const objectURL = URL.createObjectURL(file);
        const img = new Image();
        img.src = objectURL;
        img.onload = () => {
            URL.revokeObjectURL(objectURL);
            resolve({ width: img.width, height: img.height });
        };
    })
};//eslint-disable-line

/**
 * get dimensions of image by url
 * @param url Pass image url to get the dimensions
 * @returns
 * @description
 * 1. Create an Image object
 * 2. Add event listener to get the dimensions
 * 3. Revoke the object URL
 * 4. Resolve the dimensions
 */

export function getImageDimensionsByUrl(url): Promise<{ width: number, height: number }> {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
    })
}

// /**
//  * 
//  * @param el 
//  * @param windowWidth 
//  * @param windowHeight 
//  * @param scale 
//  * @param backgroundColor 
//  * @returns 
//  */
// export const exportAsImage = async (el: HTMLElement, windowWidth = 512, windowHeight = 512, scale = 1, backgroundColor = "black") => {
//     try {
//         // eslint-disable-next-line no-param-reassign
//         const canvas = await html2canvas(el, {
//             logging: true,
//             useCORS: true,
//             allowTaint: false,
//             backgroundColor,
//             windowWidth,
//             windowHeight,
//             scale,
//             onclone: (clonedDoc) => {
//                 // const expBar = clonedDoc.getElementById("exp-bar");
//                 // if (expBar) {
//                 //     expBar.remove();
//                 // }

//                 // const modal = clonedDoc.getElementById("share-url-modal");
//                 // if (modal) {
//                 //     modal.remove();
//                 // }
//                 // const options = clonedDoc.getElementById("desktop-options");
//                 // if (options) {
//                 //     options.remove();
//                 // }
//                 // const sendAMessageBar = clonedDoc.getElementById("send-a-message-bar");
//                 // if (sendAMessageBar) {
//                 //     sendAMessageBar.remove();
//                 // }
//                 // const bar = clonedDoc.getElementById("personality-bar");
//                 // if (bar) {
//                 //     bar.style.width = "726px";
//                 // }
//                 console.log(clonedDoc);
//                 return clonedDoc;
//             }
//         });
//         const image = canvas.toDataURL("image/jpg", 1.0);
//         return { error: false, message: "", data: image }

//         // download the image
//     } catch (e: any) {
//         return { error: true, message: e.message, data: "" }
//     }

// };

