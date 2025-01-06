const bgChanging = (ele) => {
   let R1 = Math.floor(Math.random() * 256);
   let G1 = Math.floor(Math.random() * 256);
   let B1 = Math.floor(Math.random() * 256);
   let R2 = Math.floor(Math.random() * 256);
   let G2 = Math.floor(Math.random() * 256);
   let B2 = Math.floor(Math.random() * 256);

   // Calculate the middle color (average of the two colors)
   let midR = Math.floor((R1 + R2) / 2);
   let midG = Math.floor((G1 + G2) / 2);
   let midB = Math.floor((B1 + B2) / 2);

   // Calculate the complementary color for the text
   let textR = 255 - midR;
   let textG = 255 - midG;
   let textB = 255 - midB;

   // Apply animation styles
   ele.style.animation = "gradientMove 2s ease-in-out forwards";
   ele.style.backgroundImage = `radial-gradient(circle at 0% 50%, rgb(${R1}, ${G1}, ${B1}), rgb(${R2}, ${G2}, ${B2}))`;
   ele.style.color = `rgb(${textR}, ${textG}, ${textB})`;

   // Update the CSS variable for the gradient animation
   ele.style.setProperty("--end-gradient", `radial-gradient(circle at 100% 50%, rgb(${R1}, ${G1}, ${B1}), rgb(${R2}, ${G2}, ${B2}))`);
};

export default bgChanging;
