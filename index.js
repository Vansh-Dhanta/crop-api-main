import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));


//3. GET a jokes by filtering on the joke type
app.get("/:category/:id",(req,res)=>{
    const {category , id}=req.params;
    console.log(id);
    const found = crops.find((crop) => crop.name === id);
    console.log(found);
    res.json(found);
});

app.get("/:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const found = crops.filter((crop) => crop.type === id);
    console.log(found);
    res.json(found);
});

app.get("/:category/:disease/:id",(req,res)=>{
    const {category , disease , id}=req.params;
    
    const found = crops.find((crop) => crop.name === disease);

    const foundDisease = found.diseases.find((disease) => disease.name === id);
    console.log(foundDisease);
    res.json(foundDisease);
});




app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

const crops = [
    // Field Crops
    {
      "type": "field-crop",
      "name": "wheat",
      "diseases": [
        {
          "name": "Wheat-Rust",
          "symptoms": "Symptoms of Wheat Rust include the appearance of orange or reddish-brown pustules on leaves, stems, and spikes. These pustules can rupture, releasing rust-colored spores. Affected plants often exhibit stunted growth and reduced grain yield.",
          "prevention": [
            "1. Use rust-resistant wheat varieties.",
            "2. Apply fungicides when necessary during wet conditions.",
            "3. Practice crop rotation to reduce disease pressure.",
            "4. Maintain proper spacing between plants.",
            "5. Monitor and manage humidity levels.",
            "6. Remove and destroy infected plant material.",
            "7. Implement good field hygiene practices.",
            "8. Choose disease-free seeds.",
            "9. Monitor weather conditions for rust-friendly environments.",
            "10. Consult with an agricultural expert for specific treatment recommendations."
          ],
          "management": [
            "1. Apply fungicides at the first sign of infection.",
            "2. Monitor weather conditions for rust-friendly environments.",
            "3. Remove and destroy infected plant material to reduce spore sources.",
            "4. Implement effective weed control measures.",
            "5. Promote natural predators of rust pathogens.",
            "6. Adjust nitrogen fertilization based on disease risk.",
            "7. Monitor rust development throughout the growing season.",
            "8. Maintain records of disease outbreaks and treatments.",
            "9. Conduct regular field inspections for early detection.",
            "10. Collaborate with local agricultural experts and extension services for guidance."
          ],
          "pesticides": [
            "Recommended fungicides for Wheat Rust include Triazole-based or strobilurin-based fungicides such as Propiconazole or Tebuconazole. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Wheat-Smuts",
          "symptoms": "Symptoms of Wheat Smuts include the development of black, powdery spore masses on wheat heads, giving them a dirty appearance. This can result in reduced grain quality and yield.",
          "prevention": [
            "1. Use certified disease-free seeds.",
            "2. Clean and sanitize planting equipment.",
            "3. Implement good field hygiene practices.",
            "4. Apply fungicides to seeds during planting.",
            "5. Practice crop rotation to reduce disease buildup.",
            "6. Monitor weather conditions for smut-friendly environments.",
            "7. Consult with an agricultural expert for smut management strategies.",
            "8. Maintain records of disease outbreaks and treatments.",
            "9. Conduct regular field inspections for early detection.",
            "10. Collaborate with local agricultural experts and extension services for guidance."
          ],
          "management": [
            "1. Apply fungicides to seeds during planting if smut is detected.",
            "2. Monitor weather conditions for smut-friendly environments.",
            "3. Remove and destroy infected plant material to reduce spore sources.",
            "4. Implement effective weed control measures.",
            "5. Promote natural predators of smut pathogens.",
            "6. Adjust nitrogen fertilization based on disease risk.",
            "7. Monitor smut development throughout the growing season.",
            "8. Maintain records of disease outbreaks and treatments.",
            "9. Conduct regular field inspections for early detection.",
            "10. Collaborate with local agricultural experts and extension services for guidance."
          ],
          "pesticides": [
            "Recommended fungicides for Wheat Smuts include Triadimefon or Thiabendazole. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Wheat-Leaf-Spots",
          "symptoms": "Symptoms of Wheat Leaf Spots include the development of small, dark brown to black spots on wheat leaves, which may coalesce into larger lesions. Severe infections can lead to reduced photosynthesis and grain yield.",
          "prevention": [
            "1. Choose wheat varieties resistant to leaf spots.",
            "2. Maintain proper soil drainage to reduce humidity.",
            "3. Space plants adequately to improve air circulation.",
            "4. Apply fungicides during wet periods.",
            "5. Rotate crops with non-host plants to break disease cycles.",
            "6. Avoid excessive nitrogen fertilization, which can promote disease development.",
            "7. Monitor weather conditions for leaf spot-friendly environments.",
            "8. Consult with an agricultural expert for specific treatment recommendations.",
            "9. Maintain records of disease outbreaks and treatments.",
            "10. Conduct regular field inspections for early detection."
          ],
          "management": [
            "1. Apply fungicides during wet periods.",
            "2. Rotate crops with non-host plants to break disease cycles.",
            "3. Remove and destroy infected plant material to reduce disease spread.",
            "4. Implement effective weed control measures.",
            "5. Adjust nitrogen fertilization based on disease risk.",
            "6. Monitor leaf spot development throughout the growing season.",
            "7. Maintain records of disease outbreaks and treatments.",
            "8. Conduct regular field inspections for early detection.",
            "9. Collaborate with local agricultural experts and extension services for guidance.",
            "10. Promote natural predators of leaf spot pathogens."
          ],
          "pesticides": [
            "Recommended fungicides for Wheat Leaf Spots include Chlorothalonil or Propiconazole. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Wheat-Yellow-Mosaic",
          "symptoms": "Symptoms of Wheat Yellow Mosaic include the yellowing and mottling of wheat leaves, often in a mosaic pattern. Infected plants may exhibit stunted growth and reduced grain yield.",
          "prevention": [
            "1. Use virus-tested seeds to ensure they are free from mosaic virus.",
            "2. Implement proper weed control to reduce virus reservoirs.",
            "3. Monitor for aphid activity and control aphid vectors.",
            "4. Choose wheat varieties with virus resistance.",
            "5. Maintain proper soil drainage to reduce waterlogged conditions.",
            "6. Space plants adequately to improve air circulation.",
            "7. Apply insecticides when aphid populations are high.",
            "8. Plant virus-free seeds in virus-prone areas.",
            "9. Consult with a plant pathologist for virus management strategies.",
            "10. Maintain records of disease outbreaks and treatments."
          ],
          "management": [
            "1. Remove and destroy infected plants to prevent virus spread.",
            "2. Use insecticidal treatments when aphid populations are high.",
            "3. Promote natural predators of aphid vectors for biological control.",
            "4. Adjust planting times to minimize exposure to aphid infestations.",
            "5. Monitor virus symptoms throughout the growing season.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Collaborate with local agricultural experts and extension services for guidance.",
            "8. Implement early weed control to reduce alternate hosts for the virus.",
            "9. Plant virus-tested seeds in virus-prone areas.",
            "10. Adjust nitrogen fertilization based on disease risk."
          ],
          "pesticides": [
            "Recommended insecticides for Wheat Yellow Mosaic include Pyrethroids or Neonicotinoids for aphid control. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Wheat-Stem-Borer",
          "symptoms": "Symptoms of Wheat Stem Borer include wilting and lodging of wheat plants. Larval feeding can be found inside stems, resulting in reduced grain yield.",
          "prevention": [
            "1. Plant early-maturing wheat varieties to avoid peak stem borer activity.",
            "2. Implement crop rotation with non-host crops to disrupt stem borer life cycles.",
            "3. Monitor stem borer populations regularly.",
            "4. Choose wheat varieties resistant to stem borers.",
            "5. Maintain proper soil drainage to reduce waterlogged conditions.",
            "6. Space plants adequately to improve air circulation.",
            "7. Apply insecticidal treatments when stem borer populations exceed threshold levels.",
            "8. Promote natural predators of stem borers for biological control.",
            "9. Adjust planting times to minimize exposure to stem borer infestations.",
            "10. Consult with an entomologist for stem borer management strategies."
          ],
          "management": [
            "1. Scout for stem borer eggs and larvae in the field.",
            "2. Use insecticidal treatments when stem borer populations exceed threshold levels.",
            "3. Promote natural predators of stem borers for biological control.",
            "4. Implement effective weed control measures.",
            "5. Adjust nitrogen fertilization based on stem borer risk.",
            "6. Monitor stem borer activity throughout the growing season.",
            "7. Maintain records of pest populations and treatments.",
            "8. Collaborate with local agricultural experts and extension services for guidance.",
            "9. Adjust planting times to minimize exposure to stem borer infestations.",
            "10. Maintain proper soil drainage to reduce waterlogged conditions."
          ],
          "pesticides": [
            "Recommended insecticides for Wheat Stem Borer include Carbaryl or Pyrethroids. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        }
    
      ]
    },
    {
      "type": "field-crop",
      "name": "rice",
      "diseases": [
        {
          "name": "Rice-Blast",
          "symptoms": "Symptoms of Rice Blast include small, dark lesions with a characteristic white center on leaves, stems, and grains. Infected plants may exhibit reduced yield and grain quality.",
          "prevention": [
            "1. Use disease-resistant rice varieties.",
            "2. Implement crop rotation with non-host crops.",
            "3. Maintain proper water management to avoid prolonged leaf wetness.",
            "4. Space plants adequately for air circulation.",
            "5. Apply fungicides during disease-prone periods.",
            "6. Remove and destroy infected plant material.",
            "7. Practice good field hygiene."
          ],
          "management": [
            "1. Apply fungicides preventively or at the first sign of infection.",
            "2. Monitor weather conditions for favorable disease development.",
            "3. Adjust nitrogen fertilization based on disease risk.",
            "4. Promote natural predators of the rice blast fungus.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "Recommended fungicides for Rice Blast include Triazole-based or Qo inhibitor fungicides like Propiconazole or Azoxystrobin. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Rice-Sheath-Blight",
          "symptoms": "Symptoms of Rice Sheath Blight include elongated lesions on sheaths and leaves, which can lead to lodging and yield loss. Infected plants may exhibit reduced grain filling.",
          "prevention": [
            "1. Use disease-resistant rice varieties.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides during disease-prone periods.",
            "6. Monitor weather conditions for favorable disease development."
          ],
          "management": [
            "1. Apply fungicides preventively or at the first sign of infection.",
            "2. Promote natural enemies of the sheath blight fungus.",
            "3. Conduct regular field inspections for early detection.",
            "4. Remove and destroy infected plant material.",
            "5. Adjust nitrogen fertilization based on disease risk.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "Recommended fungicides for Rice Sheath Blight include Trifloxystrobin or Azoxystrobin. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Rice-Tungro",
          "symptoms": "Symptoms of Rice Tungro include stunted growth, yellowing of leaves, and reduced grain yield. Infected plants may have discolored or distorted leaves.",
          "prevention": [
            "1. Use virus-free seeds and seedlings.",
            "2. Control the populations of virus-carrying insects like leafhoppers and planthoppers.",
            "3. Implement proper weed control to reduce alternate hosts for the virus.",
            "4. Monitor for virus-carrying insect activity.",
            "5. Plant virus-resistant rice varieties.",
            "6. Consult with a plant pathologist for virus management strategies."
          ],
          "management": [
            "1. Remove and destroy infected plants to prevent virus spread.",
            "2. Use insecticidal treatments when virus-carrying insect populations are high.",
            "3. Implement early weed control measures to reduce alternate hosts for the virus.",
            "4. Adjust planting times to minimize exposure to virus-carrying insects.",
            "5. Maintain records of disease outbreaks and treatments.",
            "6. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "Recommended insecticides for controlling virus-carrying insects include Pyrethroids or Neonicotinoids. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Rice-Brown-Spot",
          "symptoms": "Symptoms of Rice Brown Spot include circular to oval brown lesions with a yellow halo on rice leaves. Severe infections can lead to reduced grain yield.",
          "prevention": [
            "1. Choose rice varieties with brown spot resistance.",
            "2. Maintain proper plant spacing to improve air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides during disease-prone periods.",
            "6. Monitor weather conditions for favorable disease development."
          ],
          "management": [
            "1. Apply fungicides preventively or at the first sign of infection.",
            "2. Promote natural enemies of the brown spot fungus.",
            "3. Conduct regular field inspections for early detection.",
            "4. Remove and destroy infected plant material.",
            "5. Adjust nitrogen fertilization based on disease risk.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "Recommended fungicides for Rice Brown Spot include Propiconazole or Mancozeb. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Rice-Gall-Midge",
          "symptoms": "Symptoms of Rice Gall Midge infestation include stunted growth, wilting of plants, and the presence of larvae inside rice stems. Infected plants may not produce grains.",
          "prevention": [
            "1. Use resistant rice varieties.",
            "2. Implement crop rotation with non-host crops.",
            "3. Monitor for gall midge populations.",
            "4. Promote natural predators of gall midge insects.",
            "5. Adjust planting times to avoid peak midge activity."
          ],
          "management": [
            "1. Scout for gall midge larvae and pupae in the field.",
            "2. Use insecticidal treatments when midge populations exceed threshold levels.",
            "3. Promote natural predators of gall midge insects for biological control.",
            "4. Adjust planting times to minimize exposure to midge infestations.",
            "5. Maintain records of pest populations and treatments.",
            "6. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "Recommended insecticides for Rice Gall Midge include Neonicotinoids or Carbaryl. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "field-crop",
      "name": "corn",
      "diseases": [
        {
          "name": "Corn-Smuts",
          "symptoms": "Symptoms of Corn Smuts include the development of large, gray-black galls or fungal masses on corn ears, tassels, and stalks. Infected plants may have reduced grain quality and yield.",
          "prevention": [
            "1. Use disease-free seeds.",
            "2. Implement good field hygiene practices.",
            "3. Apply fungicides during planting if smut is detected.",
            "4. Rotate crops with non-host plants.",
            "5. Monitor weather conditions for smut-friendly environments."
          ],
          "management": [
            "1. Remove and destroy infected plant material.",
            "2. Use fungicides preventively or at the first sign of infection.",
            "3. Adjust nitrogen fertilization based on disease risk.",
            "4. Maintain proper spacing between plants for air circulation.",
            "5. Conduct regular field inspections for early detection."
          ],
          "pesticides": [
            "Recommended fungicides for Corn Smuts include Triadimefon or Thiabendazole. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Corn-Common-Rust",
          "symptoms": "Symptoms of Corn Common Rust include small, reddish-brown to orange pustules on corn leaves, which may later turn black. Infected plants may have reduced photosynthesis and yield.",
          "prevention": [
            "1. Plant rust-resistant corn varieties.",
            "2. Apply fungicides preventively or at the first sign of infection.",
            "3. Maintain proper plant spacing for air circulation.",
            "4. Implement crop rotation with non-host crops.",
            "5. Monitor weather conditions for rust-friendly environments."
          ],
          "management": [
            "1. Use fungicides preventively or at the first sign of infection.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of rust pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Corn Common Rust include Triazole-based or Strobilurin-based fungicides like Propiconazole or Azoxystrobin. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Corn-Northern-Leaf-Blight",
          "symptoms": "Symptoms of Corn Northern Leaf Blight include the development of cigar-shaped lesions with gray centers on corn leaves. Severe infections can lead to reduced photosynthesis and yield.",
          "prevention": [
            "1. Choose corn varieties with Northern Leaf Blight resistance.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides preventively or at the first sign of infection."
          ],
          "management": [
            "1. Use fungicides preventively or at the first sign of infection.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of leaf blight pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Corn Northern Leaf Blight include Chlorothalonil or Propiconazole. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Corn-Gray-Leaf-Spot",
          "symptoms": "Symptoms of Corn Gray Leaf Spot include the appearance of rectangular, gray to tan lesions on corn leaves. Severe infections can lead to reduced photosynthesis and yield.",
          "prevention": [
            "1. Plant corn varieties resistant to Gray Leaf Spot.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides preventively or at the first sign of infection."
          ],
          "management": [
            "1. Use fungicides preventively or at the first sign of infection.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of Gray Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Corn Gray Leaf Spot include Azoxystrobin or Propiconazole. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Corn-Southern-Rust",
          "symptoms": "Symptoms of Corn Southern Rust include the development of small, circular to oval, orange to reddish-brown pustules on corn leaves, which may later turn brown. Severe infections can lead to yield loss.",
          "prevention": [
            "1. Plant rust-resistant corn varieties.",
            "2. Apply fungicides preventively or at the first sign of infection.",
            "3. Maintain proper plant spacing for air circulation.",
            "4. Implement crop rotation with non-host crops.",
            "5. Monitor weather conditions for rust-friendly environments."
          ],
          "management": [
            "1. Use fungicides preventively or at the first sign of infection.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of rust pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Corn Southern Rust include Triazole-based or Strobilurin-based fungicides like Propiconazole or Azoxystrobin. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "field-crop",
      "name": "cotton",
      "diseases": [
        {
          "name": "Cotton-Leaf-Spot",
          "symptoms": "Symptoms of Cotton Leaf Spot include small, dark lesions with yellow halos on cotton leaves. Severe infections can lead to defoliation and reduced fiber quality.",
          "prevention": [
            "1. Choose cotton varieties with Leaf Spot resistance.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides preventively or at the first sign of infection."
          ],
          "management": [
            "1. Use fungicides preventively or at the first sign of infection.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Cotton Leaf Spot include Chlorothalonil or Azoxystrobin. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cotton-Wilt",
          "symptoms": "Symptoms of Cotton Wilt include wilting of cotton plants, yellowing of leaves, and vascular discoloration. Infected plants may exhibit reduced yield.",
          "prevention": [
            "1. Use disease-resistant cotton varieties.",
            "2. Implement proper irrigation management.",
            "3. Maintain proper soil drainage.",
            "4. Avoid excessive nitrogen fertilization.",
            "5. Plant cotton in well-drained areas.",
            "6. Monitor soil moisture levels."
          ],
          "management": [
            "1. Remove and destroy infected plants to prevent disease spread.",
            "2. Adjust irrigation practices to prevent waterlogging.",
            "3. Adjust nitrogen fertilization based on disease risk.",
            "4. Promote healthy root development through appropriate cultural practices.",
            "5. Conduct regular field inspections for early detection.",
            "6. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "There are no specific chemical treatments for Cotton Wilt. Focus on preventive measures and cultural practices to manage the disease."
          ]
        },
        {
          "name": "Cotton-Boll-Rot",
          "symptoms": "Symptoms of Cotton Boll Rot include the development of brown to black fungal growth on cotton bolls. Infected bolls may split open, reducing fiber quality.",
          "prevention": [
            "1. Maintain proper plant spacing for air circulation.",
            "2. Implement crop rotation with non-host crops.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Apply fungicides preventively during flowering.",
            "5. Monitor weather conditions for disease-friendly environments."
          ],
          "management": [
            "1. Use fungicides preventively during flowering.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of Boll Rot pathogens.",
            "4. Remove and destroy infected bolls to prevent disease spread.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Cotton Boll Rot include Azoxystrobin or Thiophanate-methyl. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cotton-Verticillium-Wilt",
          "symptoms": "Symptoms of Cotton Verticillium Wilt include wilting of cotton plants, yellowing of leaves, and vascular discoloration. Infected plants may exhibit reduced yield.",
          "prevention": [
            "1. Use disease-resistant cotton varieties.",
            "2. Implement proper irrigation management.",
            "3. Maintain proper soil drainage.",
            "4. Avoid excessive nitrogen fertilization.",
            "5. Practice crop rotation with non-host crops.",
            "6. Plant cotton in well-drained areas.",
            "7. Monitor soil moisture levels."
          ],
          "management": [
            "1. Remove and destroy infected plants to prevent disease spread.",
            "2. Adjust irrigation practices to prevent waterlogging.",
            "3. Adjust nitrogen fertilization based on disease risk.",
            "4. Promote healthy root development through appropriate cultural practices.",
            "5. Conduct regular field inspections for early detection.",
            "6. Collaborate with local agricultural experts for guidance."
          ],
          "pesticides": [
            "There are no specific chemical treatments for Cotton Verticillium Wilt. Focus on preventive measures and cultural practices to manage the disease."
          ]
        },
        {
          "name": "Cotton-Angular-Leaf-Spot",
          "symptoms": "Symptoms of Cotton Angular Leaf Spot include the appearance of small, angular lesions with a dark center on cotton leaves. Severe infections can lead to defoliation and reduced fiber quality.",
          "prevention": [
            "1. Choose cotton varieties with Angular Leaf Spot resistance.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides preventively or at the first sign of infection."
          ],
          "management": [
            "1. Use fungicides preventively or at the first sign of infection.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote natural enemies of Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments."
          ],
          "pesticides": [
            "Recommended fungicides for Cotton Angular Leaf Spot include Chlorothalonil or Azoxystrobin. Follow manufacturer instructions for application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "field-crop",
      "name": "barley",
      "diseases": [
        {
          "name": "Barley-Leaf-Rust",
          "symptoms": "Barley Leaf Rust manifests as orange to brown pustules on leaves, reducing photosynthesis and yield. Infected barley plants exhibit decreased vigor.",
          "prevention": [
            "1. Opt for barley varieties resistant to Leaf Rust.",
            "2. Ensure adequate plant spacing for air circulation.",
            "3. Avoid over-fertilization with nitrogen.",
            "4. Implement crop rotation with non-host crops.",
            "5. Apply fungicides preventively or at first signs of infection.",
            "6. Maintain records of disease history.",
            "7. Collaborate with local agricultural experts.",
            "8. Properly dispose of infected plant debris.",
            "9. Monitor weather conditions for risk assessment.",
            "10. Educate farmworkers about disease prevention."
          ],
          "management": [
            "1. Apply fungicides preventively during the growing season.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Promote beneficial organisms that control rust pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain records of disease outbreaks and treatments.",
            "6. Consider genetic resistance in planting decisions.",
            "7. Isolate infected areas to prevent spread.",
            "8. Implement biological control measures.",
            "9. Avoid planting in humid or wet areas.",
            "10. Develop a disease management plan."
          ],
          "pesticides": [
            "For controlling Barley Leaf Rust, Triazole-based or Strobilurin-based fungicides like Propiconazole or Azoxystrobin are recommended. Ensure proper application, dosage, and adherence to safety precautions per the manufacturer's instructions."
          ]
        },
        {
          "name": "Barley-Powdery-Mildew",
          "symptoms": "Barley Powdery Mildew is identified by white, powdery growth on leaves, impacting photosynthesis and yield. Severely infected barley plants may exhibit stunted growth.",
          "prevention": [
            "1. Choose barley varieties with Powdery Mildew resistance.",
            "2. Maintain appropriate plant spacing for ventilation.",
            "3. Avoid excessive nitrogen application.",
            "4. Practice crop rotation with non-host crops.",
            "5. Apply fungicides preventively during disease-prone periods.",
            "6. Monitor humidity levels in the field.",
            "7. Consider weather forecasts for disease risk assessment.",
            "8. Educate farmworkers on disease recognition.",
            "9. Invest in disease-resistant seed varieties.",
            "10. Collaborate with agricultural extension services."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen application to minimize disease risk.",
            "3. Encourage natural predators of Powdery Mildew.",
            "4. Implement regular field inspections for early detection.",
            "5. Maintain meticulous records of disease outbreaks and treatments.",
            "6. Isolate severely infected plants or areas.",
            "7. Promote adequate air circulation in the field.",
            "8. Monitor plant health closely.",
            "9. Use resistant cultivars where possible.",
            "10. Develop a fungicide rotation plan."
          ],
          "pesticides": [
            "To combat Barley Powdery Mildew, consider using Sulphur or Triadimefon-based fungicides. Ensure precise application, dosage, and adherence to safety instructions as per the manufacturer's recommendations."
          ]
        },
        {
          "name": "Barley-Scald",
          "symptoms": "Barley Scald presents as brown lesions with yellow margins on leaves, potentially causing defoliation and yield reduction. Severely affected plants exhibit poor overall health.",
          "prevention": [
            "1. Select barley varieties with Scald resistance.",
            "2. Maintain optimal plant spacing to enhance air circulation.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Employ crop rotation with non-host crops.",
            "5. Apply fungicides preventively during disease-prone periods.",
            "6. Monitor environmental conditions for Scald-friendly situations.",
            "7. Educate farmworkers on Scald symptoms.",
            "8. Utilize disease-free planting material.",
            "9. Collaborate with agricultural experts for guidance.",
            "10. Train personnel in sanitation practices."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen fertilization based on disease risk.",
            "3. Foster beneficial organisms that control Scald pathogens.",
            "4. Conduct routine field inspections for early detection.",
            "5. Maintain comprehensive records of disease incidents and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Promote proper aeration in the field.",
            "8. Monitor crop health vigilantly.",
            "9. Employ resistant varieties where feasible.",
            "10. Develop a fungicide application strategy."
          ],
          "pesticides": [
            "For managing Barley Scald, consider using Chlorothalonil or Triadimefon-based fungicides. Adhere strictly to the manufacturer's recommendations for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Barley-Net-Blotch",
          "symptoms": "Barley Net Blotch exhibits as elongated, dark lesions on barley leaves, potentially leading to reduced photosynthesis and yield. Severe infections can stunt plant growth.",
          "prevention": [
            "1. Opt for barley varieties resistant to Net Blotch.",
            "2. Maintain appropriate plant spacing to facilitate air circulation.",
            "3. Refrain from excessive nitrogen application.",
            "4. Employ crop rotation with non-host crops.",
            "5. Apply fungicides preventively during disease-prone periods.",
            "6. Keep an eye on weather conditions conducive to Net Blotch.",
            "7. Train farmworkers to recognize Net Blotch symptoms.",
            "8. Invest in disease-free seed material.",
            "9. Seek guidance from agricultural experts.",
            "10. Implement sanitation protocols on the farm."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen fertilization to minimize disease risk.",
            "3. Encourage natural predators of Net Blotch pathogens.",
            "4. Perform regular field inspections for early detection.",
            "5. Maintain detailed records of disease occurrences and treatments.",
            "6. Isolate heavily affected areas for containment.",
            "7. Promote proper air circulation in the field.",
            "8. Monitor crop health rigorously.",
            "9. Deploy resistant cultivars when available.",
            "10. Develop a fungicide rotation plan."
          ],
          "pesticides": [
            "For effective management of Barley Net Blotch, consider utilizing Triazole-based or Strobilurin-based fungicides such as Propiconazole or Azoxystrobin. Ensure precise application, dosage, and adherence to safety precautions as per the manufacturer's guidelines."
          ]
        },
        {
          "name": "Barley-Head-Blight",
          "symptoms": "Barley Head Blight presents as bleached or pinkish fungal growth on barley heads, which can impact grain quality and yield. Severely infected heads may exhibit reduced grain fill.",
          "prevention": [
            "1. Select barley varieties with Head Blight resistance.",
            "2. Avoid excessive nitrogen application.",
            "3. Employ crop rotation with non-host crops.",
            "4. Apply fungicides preventively during flowering.",
            "5. Monitor weather conditions favorable for disease development.",
            "6. Train farmworkers to identify Head Blight symptoms.",
            "7. Collaborate with agricultural experts for advice.",
            "8. Utilize clean planting material.",
            "9. Maintain records of disease history.",
            "10. Implement rigorous sanitation measures."
          ],
          "management": [
            "1. Apply fungicides preventively during flowering.",
            "2. Adjust nitrogen fertilization to mitigate disease risk.",
            "3. Foster natural antagonists of Head Blight pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Keep comprehensive records of disease incidents and treatments.",
            "6. Isolate heavily affected areas for containment.",
            "7. Ensure proper air circulation in the field.",
            "8. Monitor crop health closely.",
            "9. Use resistant cultivars where feasible.",
            "10. Develop a fungicide rotation strategy."
          ],
          "pesticides": [
            "To effectively manage Barley Head Blight, consider employing Triazole-based or Strobilurin-based fungicides like Propiconazole or Azoxystrobin. Adhere strictly to the manufacturer's recommendations for application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "field-crop",
      "name": "jute",
      "diseases": [
        {
          "name": "Jute-Yellow-Mosaic",
          "symptoms": "Jute Yellow Mosaic presents as yellowing and mosaic-like patterns on jute leaves, stunting plant growth and affecting fiber quality.",
          "prevention": [
            "1. Plant virus-tested jute seeds.",
            "2. Control aphid vectors through insecticide applications.",
            "3. Implement proper weed management to reduce virus reservoirs.",
            "4. Use resistant jute varieties where available.",
            "5. Maintain field sanitation to limit disease spread.",
            "6. Monitor for aphid activity through sticky traps.",
            "7. Educate farmworkers on disease recognition.",
            "8. Isolate infected plants or areas for containment.",
            "9. Collaborate with local agricultural experts for advice.",
            "10. Adjust planting dates to avoid peak aphid populations."
          ],
          "management": [
            "1. Remove and destroy infected jute plants to reduce virus reservoirs.",
            "2. Apply insecticides to control aphid vectors when necessary.",
            "3. Monitor for aphid activity and adjust control measures accordingly.",
            "4. Promote natural predators of aphids.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Utilize resistant jute varieties if feasible.",
            "8. Implement crop rotation with non-host crops.",
            "9. Manage irrigation to avoid water stress.",
            "10. Train farm personnel in virus management practices."
          ],
          "pesticides": [
            "There are no specific chemical treatments for Jute Yellow Mosaic. Focus on preventive measures and aphid control. If necessary, consult with local agricultural experts for guidance on suitable insecticides."
          ]
        },
        {
          "name": "Jute-Stem-Rot",
          "symptoms": "Jute Stem Rot is characterized by dark lesions on jute stems, causing wilting and plant collapse. The disease can lead to significant fiber quality and yield losses.",
          "prevention": [
            "1. Select disease-resistant jute varieties.",
            "2. Practice proper crop rotation with non-host crops.",
            "3. Maintain optimal plant spacing for air circulation.",
            "4. Avoid excessive nitrogen fertilization.",
            "5. Ensure well-drained soil conditions.",
            "6. Prevent waterlogging through proper irrigation management.",
            "7. Promote field sanitation to reduce disease carryover.",
            "8. Monitor for early symptoms in the field.",
            "9. Collaborate with local agricultural experts for guidance.",
            "10. Educate farmworkers on disease recognition and management."
          ],
          "management": [
            "1. Remove and destroy infected jute plants to limit disease spread.",
            "2. Adjust nitrogen fertilization to minimize disease risk.",
            "3. Promote natural enemies of Stem Rot pathogens.",
            "4. Maintain proper field drainage to prevent waterlogged conditions.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Use disease-free planting material.",
            "8. Isolate heavily affected areas to prevent further spread.",
            "9. Adjust irrigation practices to avoid moisture stress.",
            "10. Develop a Stem Rot management plan."
          ],
          "pesticides": [
            "For managing Jute Stem Rot, consider using fungicides like Thiophanate-methyl or Mancozeb. Ensure precise application, dosage, and adherence to safety precautions as per the manufacturer's recommendations."
          ]
        },
        {
          "name": "Jute-Powdery-Mildew",
          "symptoms": "Jute Powdery Mildew manifests as white, powdery growth on jute leaves, affecting photosynthesis and fiber quality. Severe infections can lead to defoliation.",
          "prevention": [
            "1. Opt for jute varieties resistant to Powdery Mildew.",
            "2. Maintain proper plant spacing for ventilation.",
            "3. Avoid excessive nitrogen application.",
            "4. Practice crop rotation with non-host crops.",
            "5. Apply fungicides preventively during disease-prone periods.",
            "6. Monitor humidity levels in the field.",
            "7. Consider weather forecasts for disease risk assessment.",
            "8. Educate farmworkers on disease recognition.",
            "9. Invest in disease-resistant seed varieties.",
            "10. Collaborate with agricultural extension services."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen application to minimize disease risk.",
            "3. Encourage natural predators of Powdery Mildew pathogens.",
            "4. Perform regular field inspections for early detection.",
            "5. Maintain meticulous records of disease outbreaks and treatments.",
            "6. Isolate severely infected plants or areas.",
            "7. Promote adequate air circulation in the field.",
            "8. Monitor plant health closely.",
            "9. Use resistant cultivars where possible.",
            "10. Develop a fungicide rotation plan."
          ],
          "pesticides": [
            "For effective management of Jute Powdery Mildew, consider employing fungicides like Sulphur or Triadimefon. Adhere strictly to the manufacturer's recommendations for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Jute-Bacterial-Blight",
          "symptoms": "Jute Bacterial Blight displays as water-soaked, dark lesions on jute leaves, eventually causing tissue necrosis and defoliation. The disease can result in significant yield losses.",
          "prevention": [
            "1. Use disease-free jute seeds from reputable sources.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid overhead irrigation to minimize leaf wetness.",
            "4. Practice crop rotation with non-host crops.",
            "5. Promote field sanitation and remove infected plant material.",
            "6. Adjust nitrogen application based on disease risk.",
            "7. Educate farmworkers on disease recognition and prevention.",
            "8. Monitor weather conditions conducive to Blight development.",
            "9. Collaborate with local agricultural experts for advice.",
            "10. Implement strict sanitation protocols during field operations."
          ],
          "management": [
            "1. Remove and destroy infected jute plants to limit disease spread.",
            "2. Adjust nitrogen fertilization to minimize disease risk.",
            "3. Promote beneficial organisms that can suppress Bacterial Blight.",
            "4. Avoid overhead irrigation to reduce leaf wetness.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Use disease-free planting material.",
            "8. Isolate severely affected areas for containment.",
            "9. Monitor jute health closely.",
            "10. Develop a Bacterial Blight management plan."
          ],
          "pesticides": [
            "For managing Jute Bacterial Blight, consider copper-based fungicides or bactericides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Jute-Root-Rot",
          "symptoms": "Jute Root Rot is characterized by brown, decaying roots and reduced plant vigor. Above-ground symptoms include wilting and poor fiber quality.",
          "prevention": [
            "1. Practice crop rotation with non-host crops.",
            "2. Ensure proper soil drainage to prevent waterlogging.",
            "3. Maintain optimal planting depth.",
            "4. Use disease-free planting material.",
            "5. Avoid excessive nitrogen application.",
            "6. Educate farmworkers on disease recognition and prevention.",
            "7. Monitor soil moisture levels.",
            "8. Collaborate with local agricultural experts for guidance.",
            "9. Implement strict sanitation practices during field operations.",
            "10. Adjust irrigation practices to avoid moisture stress."
          ],
          "management": [
            "1. Remove and destroy infected jute plants to limit disease spread.",
            "2. Promote healthy root development through proper cultural practices.",
            "3. Adjust nitrogen application based on disease risk.",
            "4. Maintain proper field drainage to prevent waterlogged conditions.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Use disease-resistant jute varieties if available.",
            "8. Isolate heavily affected areas for containment.",
            "9. Monitor jute health and root quality closely.",
            "10. Develop a Root Rot management plan."
          ],
          "pesticides": [
            "For effective management of Jute Root Rot, consider using fungicides like Thiophanate-methyl or Mancozeb. Adhere strictly to the manufacturer's recommendations for application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "field-crop",
      "name": "tea",
      "diseases": [
        {
          "name": "Tea-Leaf-Blight",
          "symptoms": "Tea Leaf Blight is identified by brown to black lesions on tea leaves, leading to defoliation and reduced tea quality. Severely affected bushes exhibit stunted growth.",
          "prevention": [
            "1. Plant tea varieties resistant to Leaf Blight.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Practice regular pruning to remove infected leaves and branches.",
            "4. Implement good field sanitation practices.",
            "5. Adjust nitrogen fertilization to minimize disease risk.",
            "6. Avoid overhead irrigation to reduce leaf wetness.",
            "7. Monitor weather conditions conducive to Blight development.",
            "8. Collaborate with local agricultural experts for guidance.",
            "9. Educate farmworkers on disease recognition and prevention.",
            "10. Apply organic mulch to reduce soil splashing."
          ],
          "management": [
            "1. Prune and remove infected leaves and branches to reduce disease pressure.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Promote natural predators of Leaf Blight pathogens.",
            "4. Avoid overhead irrigation to minimize leaf wetness.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain meticulous records of disease outbreaks and treatments.",
            "7. Use disease-free planting material.",
            "8. Isolate severely affected areas for containment.",
            "9. Monitor tea health and quality closely.",
            "10. Develop a Leaf Blight management plan."
          ],
          "pesticides": [
            "For effective management of Tea Leaf Blight, consider using fungicides like Copper-based products or Mancozeb. Follow the manufacturer's recommendations for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Tea-Rust",
          "symptoms": "Tea Rust appears as rusty-orange pustules on the undersides of tea leaves, causing reduced photosynthesis and lower tea quality. Severe infections can lead to leaf drop and yield loss.",
          "prevention": [
            "1. Opt for tea varieties resistant to Rust.",
            "2. Maintain appropriate plant spacing for ventilation.",
            "3. Implement regular pruning to remove infected leaves.",
            "4. Practice good field sanitation.",
            "5. Adjust nitrogen fertilization to minimize disease risk.",
            "6. Avoid overhead irrigation to reduce leaf wetness.",
            "7. Monitor weather conditions conducive to Rust development.",
            "8. Collaborate with local agricultural experts for guidance.",
            "9. Educate farmworkers on disease recognition and prevention.",
            "10. Apply appropriate organic mulch."
          ],
          "management": [
            "1. Prune and remove infected leaves to limit disease spread.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Encourage natural predators of Rust pathogens.",
            "4. Avoid overhead irrigation to minimize leaf wetness.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Use disease-free planting material.",
            "8. Isolate severely affected areas for containment.",
            "9. Monitor tea health and quality closely.",
            "10. Develop a Rust management plan."
          ],
          "pesticides": [
            "For effective management of Tea Rust, consider using Copper-based products or Mancozeb-based fungicides. Adhere strictly to the manufacturer's recommendations for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Tea-Wilt",
          "symptoms": "Tea Wilt is characterized by wilting and yellowing of tea leaves, often accompanied by blackening of roots. Severe infections lead to plant death and yield loss.",
          "prevention": [
            "1. Use disease-free tea planting material from reputable sources.",
            "2. Implement proper soil drainage to avoid waterlogged conditions.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Practice crop rotation with non-host crops.",
            "5. Promote good field sanitation.",
            "6. Adjust irrigation practices to prevent water stress.",
            "7. Monitor soil moisture levels.",
            "8. Collaborate with local agricultural experts for advice.",
            "9. Educate farmworkers on disease recognition and prevention.",
            "10. Develop strict sanitation protocols during field operations."
          ],
          "management": [
            "1. Remove and destroy infected tea plants to limit disease spread.",
            "2. Promote healthy root development through proper cultural practices.",
            "3. Adjust nitrogen application based on disease risk.",
            "4. Maintain proper soil drainage to prevent waterlogged conditions.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Use disease-resistant tea varieties if available.",
            "8. Isolate heavily affected areas for containment.",
            "9. Monitor tea health and root quality closely.",
            "10. Develop a Wilt management plan."
          ],
          "pesticides": [
            "For effective management of Tea Wilt, consult with local agricultural experts for suitable fungicides or bactericides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Tea-Canker",
          "symptoms": "Tea Canker is identified by dark, sunken lesions on tea branches and stems, leading to dieback and reduced yield. Severe infections can girdle stems.",
          "prevention": [
            "1. Prune and remove infected tea branches regularly.",
            "2. Maintain proper plant spacing to enhance air circulation.",
            "3. Implement good field sanitation practices.",
            "4. Adjust nitrogen fertilization to minimize disease risk.",
            "5. Avoid wounding tea plants during harvest or other operations.",
            "6. Monitor weather conditions conducive to Canker development.",
            "7. Collaborate with local agricultural experts for guidance.",
            "8. Educate farmworkers on disease recognition and prevention.",
            "9. Implement strict sanitation protocols during field operations.",
            "10. Train personnel in proper pruning techniques."
          ],
          "management": [
            "1. Prune and remove infected tea branches to limit disease spread.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Promote wound healing and plant health through cultural practices.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Use disease-free planting material.",
            "7. Isolate heavily affected areas for containment.",
            "8. Monitor tea plant health closely.",
            "9. Develop a Canker management plan.",
            "10. Consider biological control options."
          ],
          "pesticides": [
            "For effective management of Tea Canker, consult with local agricultural experts for suitable fungicides or bactericides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ] 
    },
    {
      "type": "field-crop",
      "name": "sugarcane",
      "diseases": [
        {
          "name": "Sugarcane-Red-Rot",
          "symptoms": "Sugarcane Red Rot manifests as red to brown lesions on lower stems, causing wilting, lodging, and yield reduction. Severe infections can lead to plant death.",
          "prevention": [
            "1. Use disease-free sugarcane planting material from reliable sources.",
            "2. Practice crop rotation with non-host crops.",
            "3. Maintain optimal planting depth to prevent crown exposure.",
            "4. Promote good field sanitation to reduce disease carryover.",
            "5. Adjust nitrogen fertilization to minimize disease risk.",
            "6. Monitor soil moisture levels and drainage.",
            "7. Collaborate with local agricultural experts for guidance.",
            "8. Educate farmworkers on disease recognition and prevention.",
            "9. Implement strict sanitation protocols during field operations.",
            "10. Train personnel in proper cultural practices."
          ],
          "management": [
            "1. Remove and destroy infected sugarcane plants to limit disease spread.",
            "2. Promote healthy root development through proper cultural practices.",
            "3. Adjust nitrogen application based on disease risk.",
            "4. Maintain proper soil drainage to prevent waterlogged conditions.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Use disease-resistant sugarcane varieties if available.",
            "8. Isolate heavily affected areas for containment.",
            "9. Monitor sugarcane health and root quality closely.",
            "10. Develop a Red Rot management plan."
          ],
          "pesticides": [
            "For effective management of Sugarcane Red Rot, consult with local agricultural experts for suitable fungicides or bactericides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Sugarcane-Smuts",
          "symptoms": "Sugarcane Smuts appear as black, powdery masses on sugarcane buds and shoots, leading to stunted growth and reduced yield.",
          "prevention": [
            "1. Use disease-free sugarcane planting material from reputable sources.",
            "2. Treat sugarcane setts with fungicides before planting.",
            "3. Promote field sanitation to reduce disease carryover.",
            "4. Adjust nitrogen fertilization to minimize disease risk.",
            "5. Implement strict sanitation protocols during field operations.",
            "6. Monitor planting material for signs of infection.",
            "7. Collaborate with local agricultural experts for advice.",
            "8. Educate farmworkers on disease recognition and prevention.",
            "9. Maintain records of planting material treatment.",
            "10. Train personnel in proper sett treatment methods."
          ],
          "management": [
            "1. Remove and destroy infected sugarcane buds and shoots to limit disease spread.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Promote healthy bud development through proper cultural practices.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate heavily affected areas for containment.",
            "7. Monitor sugarcane health and shoot quality closely.",
            "8. Develop a Smuts management plan.",
            "9. Consider genetic resistance in planting decisions.",
            "10. Implement disease-free sett treatment practices."
          ],
          "pesticides": [
            "For managing Sugarcane Smuts, consult with local agricultural experts for suitable fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Sugarcane-Yellow-Leaf-Syndrome",
          "symptoms": "Sugarcane Yellow Leaf Syndrome is characterized by yellowing of older leaves and overall stunted growth, leading to reduced sugar content and yield.",
          "prevention": [
            "1. Use disease-free and virus-tested sugarcane planting material.",
            "2. Control aphid vectors through insecticide applications.",
            "3. Promote good field sanitation to reduce disease spread.",
            "4. Adjust nitrogen fertilization to minimize disease risk.",
            "5. Monitor aphid populations through sticky traps.",
            "6. Collaborate with local agricultural experts for guidance.",
            "7. Educate farmworkers on disease recognition and prevention.",
            "8. Implement strict sanitation protocols during field operations.",
            "9. Maintain records of aphid monitoring and control measures.",
            "10. Train personnel in aphid control methods."
          ],
          "management": [
            "1. Apply insecticides to control aphid vectors when necessary.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Promote healthy plant growth through proper cultural practices.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor sugarcane health and sugar content closely.",
            "8. Develop a Yellow Leaf Syndrome management plan.",
            "9. Consider resistant sugarcane varieties if available.",
            "10. Implement regular aphid control measures."
          ],
          "pesticides": [
            "For managing Sugarcane Yellow Leaf Syndrome, consult with local agricultural experts for suitable insecticides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Sugarcane-Leaf-Scald",
          "symptoms": "Sugarcane Leaf Scald presents as white, elongated lesions on sugarcane leaves, often accompanied by leaf twisting and reduced sugar content. Severe infections can lead to yield loss.",
          "prevention": [
            "1. Use disease-free sugarcane planting material from reputable sources.",
            "2. Maintain proper plant spacing for ventilation.",
            "3. Avoid overhead irrigation to reduce leaf wetness.",
            "4. Promote good field sanitation to reduce disease spread.",
            "5. Adjust nitrogen fertilization to minimize disease risk.",
            "6. Monitor weather conditions conducive to Scald development.",
            "7. Collaborate with local agricultural experts for advice.",
            "8. Educate farmworkers on disease recognition and prevention.",
            "9. Implement strict sanitation protocols during field operations.",
            "10. Train personnel in proper cultural practices."
          ],
          "management": [
            "1. Remove and destroy infected sugarcane leaves to limit disease spread.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Promote healthy leaf development through proper cultural practices.",
            "4. Avoid overhead irrigation to minimize leaf wetness.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Use disease-free planting material.",
            "8. Isolate heavily affected areas for containment.",
            "9. Monitor sugarcane health and leaf quality closely.",
            "10. Develop a Leaf Scald management plan."
          ],
          "pesticides": [
            "For effective management of Sugarcane Leaf Scald, consult with local agricultural experts for suitable fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Sugarcane-Smut",
          "symptoms": "Sugarcane Smut is identified by black, soot-like masses on sugarcane shoots and leaves, causing stunted growth and reduced yield.",
          "prevention": [
            "1. Use disease-free sugarcane planting material from reliable sources.",
            "2. Treat sugarcane setts with fungicides before planting.",
            "3. Promote good field sanitation to reduce disease carryover.",
            "4. Adjust nitrogen fertilization to minimize disease risk.",
            "5. Monitor planting material for signs of infection.",
            "6. Collaborate with local agricultural experts for advice.",
            "7. Educate farmworkers on disease recognition and prevention.",
            "8. Maintain records of planting material treatment.",
            "9. Implement strict sanitation protocols during field operations.",
            "10. Train personnel in proper sett treatment methods."
          ],
          "management": [
            "1. Remove and destroy infected sugarcane shoots and leaves to limit disease spread.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Promote healthy shoot development through proper cultural practices.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate heavily affected areas for containment.",
            "7. Monitor sugarcane health and shoot quality closely.",
            "8. Develop a Smut management plan.",
            "9. Consider genetic resistance in planting decisions.",
            "10. Implement disease-free sett treatment practices."
          ],
          "pesticides": [
            "For managing Sugarcane Smut, consult with local agricultural experts for suitable fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "field-crop",
      "name": "moong-dal",
      "diseases": [
        {
          "name": "Moong-Dal-Yellow-Mosaic",
          "symptoms": "Moong Dal Yellow Mosaic presents as yellowing and mosaic-like patterns on moong dal leaves, stunting plant growth and affecting yield quality.",
          "prevention": [
            "1. Plant virus-tested moong dal seeds.",
            "2. Control whitefly vectors through insecticide applications.",
            "3. Implement proper weed management to reduce virus reservoirs.",
            "4. Use resistant moong dal varieties where available.",
            "5. Maintain field sanitation to limit disease spread.",
            "6. Monitor for whitefly activity through sticky traps.",
            "7. Educate farmworkers on disease recognition.",
            "8. Isolate infected plants or areas for containment.",
            "9. Collaborate with local agricultural experts for advice.",
            "10. Adjust planting dates to avoid peak whitefly populations."
          ],
          "management": [
            "1. Remove and destroy infected moong dal plants to reduce virus reservoirs.",
            "2. Apply insecticides to control whitefly vectors when necessary.",
            "3. Monitor for whitefly activity and adjust control measures accordingly.",
            "4. Promote natural predators of whiteflies.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Utilize resistant moong dal varieties if feasible.",
            "8. Implement crop rotation with non-host crops.",
            "9. Manage irrigation to avoid water stress.",
            "10. Train farm personnel in virus management practices."
          ],
          "pesticides": [
            "There are no specific chemical treatments for Moong Dal Yellow Mosaic. Focus on preventive measures and whitefly control. If necessary, consult with local agricultural experts for guidance on suitable insecticides."
          ]
        },
        {
          "name": "Moong-Dal-Rust",
          "symptoms": "Moong Dal Rust appears as rusty-brown pustules on the undersides of moong dal leaves, causing reduced photosynthesis and lower yield quality. Severe infections can lead to defoliation.",
          "prevention": [
            "1. Opt for moong dal varieties resistant to Rust.",
            "2. Maintain appropriate plant spacing for ventilation.",
            "3. Implement regular pruning to remove infected leaves.",
            "4. Practice good field sanitation.",
            "5. Adjust nitrogen fertilization to minimize disease risk.",
            "6. Avoid overhead irrigation to reduce leaf wetness.",
            "7. Monitor weather conditions conducive to Rust development.",
            "8. Collaborate with local agricultural experts for guidance.",
            "9. Educate farmworkers on disease recognition and prevention.",
            "10. Apply fungicides preventively during disease-prone periods."
          ],
          "management": [
            "1. Prune and remove infected moong dal leaves to limit disease spread.",
            "2. Adjust nitrogen application based on disease risk.",
            "3. Encourage natural predators of Rust pathogens.",
            "4. Avoid overhead irrigation to minimize leaf wetness.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Use disease-free planting material.",
            "8. Isolate heavily affected areas for containment.",
            "9. Monitor moong dal health and leaf quality closely.",
            "10. Develop a Rust management plan."
          ],
          "pesticides": [
            "For effective management of Moong Dal Rust, consider using Copper-based products or Mancozeb-based fungicides. Adhere strictly to the manufacturer's recommendations for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Moong-Dal-Powdery-Mildew",
          "symptoms": "Moong Dal Powdery Mildew manifests as white, powdery growth on moong dal leaves, affecting photosynthesis and yield quality. Severe infections can lead to defoliation.",
          "prevention": [
            "1. Opt for moong dal varieties resistant to Powdery Mildew.",
            "2. Maintain proper plant spacing for ventilation.",
            "3. Avoid excessive nitrogen application.",
            "4. Practice crop rotation with non-host crops.",
            "5. Apply fungicides preventively during disease-prone periods.",
            "6. Monitor humidity levels in the field.",
            "7. Consider weather forecasts for disease risk assessment.",
            "8. Educate farmworkers on disease recognition.",
            "9. Invest in disease-resistant seed varieties.",
            "10. Collaborate with agricultural extension services."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen application to minimize disease risk.",
            "3. Encourage natural predators of Powdery Mildew pathogens.",
            "4. Perform regular field inspections for early detection.",
            "5. Maintain meticulous records of disease outbreaks and treatments.",
            "6. Isolate severely infected plants or areas.",
            "7. Promote adequate air circulation in the field.",
            "8. Monitor plant health closely.",
            "9. Use resistant cultivars where possible.",
            "10. Develop a fungicide rotation plan."
          ],
          "pesticides": [
            "For effective management of Moong Dal Powdery Mildew, consider employing fungicides like Sulphur or Triadimefon. Adhere strictly to the manufacturer's guidelines for application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Moong-Dal-Anthracnose",
          "symptoms": "Moong Dal Anthracnose displays as dark, sunken lesions on moong dal pods, seeds, and stems, leading to reduced yield quality. Severe infections can result in pod and seed rot.",
          "prevention": [
            "1. Use disease-free moong dal seeds from reputable sources.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid overhead irrigation to minimize moisture on pods and seeds.",
            "4. Practice crop rotation with non-host crops.",
            "5. Promote field sanitation and remove infected plant material.",
            "6. Adjust nitrogen application based on disease risk.",
            "7. Educate farmworkers on disease recognition and prevention.",
            "8. Monitor weather conditions conducive to Anthracnose development.",
            "9. Collaborate with local agricultural experts for advice.",
            "10. Implement strict sanitation protocols during harvesting and processing."
          ],
          "management": [
            "1. Remove and destroy infected moong dal pods, seeds, and plant material to limit disease spread.",
            "2. Adjust nitrogen fertilization to minimize disease risk.",
            "3. Promote healthy pod development through proper cultural practices.",
            "4. Avoid overhead irrigation to reduce moisture on pods.",
            "5. Conduct regular field inspections for early detection.",
            "6. Maintain records of disease outbreaks and treatments.",
            "7. Use disease-resistant moong dal varieties if available.",
            "8. Isolate heavily affected areas for containment.",
            "9. Monitor moong dal pod and seed quality closely.",
            "10. Develop an Anthracnose management plan."
          ],
          "pesticides": [
            "For managing Moong Dal Anthracnose, consult with local agricultural experts for suitable fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Moong-Dal-Leaf-Spot",
          "symptoms": "Moong Dal Leaf Spot is identified by dark lesions on moong dal leaves, often with a yellow halo, leading to defoliation and reduced yield quality.",
          "prevention": [
            "1. Opt for moong dal varieties resistant to Leaf Spot.",
            "2. Maintain proper plant spacing for air circulation.",
            "3. Avoid excessive nitrogen application.",
            "4. Practice crop rotation with non-host crops.",
            "5. Apply fungicides preventively during disease-prone periods.",
            "6. Monitor humidity levels in the field.",
            "7. Consider weather forecasts for disease risk assessment.",
            "8. Educate farmworkers on disease recognition.",
            "9. Invest in disease-resistant seed varieties.",
            "10. Collaborate with agricultural extension services."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen application to minimize disease risk.",
            "3. Encourage natural predators of Leaf Spot pathogens.",
            "4. Perform regular field inspections for early detection.",
            "5. Maintain meticulous records of disease outbreaks and treatments.",
            "6. Isolate severely infected plants or areas.",
            "7. Promote adequate air circulation in the field.",
            "8. Monitor plant health closely.",
            "9. Use resistant cultivars where possible.",
            "10. Develop a fungicide rotation plan."
          ],
          "pesticides": [
            "For effective management of Moong Dal Leaf Spot, consider employing fungicides like Chlorothalonil or Mancozeb. Adhere strictly to the manufacturer's guidelines for application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "apple",
      "diseases": [
        {
          "name": "Apple-Scab",
          "symptoms": "Apple Scab appears as dark, scaly lesions on apple leaves, fruit, and stems, affecting fruit quality and tree health. Severe infections lead to defoliation and reduced yield.",
          "prevention": [
            "1. Plant scab-resistant apple varieties.",
            "2. Prune trees to promote air circulation and sunlight penetration.",
            "3. Remove and destroy fallen leaves and infected fruit.",
            "4. Apply fungicides preventively during the growing season.",
            "5. Monitor weather conditions conducive to scab development.",
            "6. Collaborate with local agricultural experts for advice.",
            "7. Educate orchard workers on disease recognition and prevention.",
            "8. Maintain proper tree spacing for ventilation.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Adjust nitrogen fertilization to minimize disease risk."
          ],
          "management": [
            "1. Prune and remove infected plant parts to limit disease spread.",
            "2. Apply fungicides as directed by local experts.",
            "3. Promote natural predators of scab pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Use scab-resistant apple varieties where possible.",
            "7. Isolate severely affected trees or areas for containment.",
            "8. Monitor tree health and fruit quality closely.",
            "9. Develop a scab management plan.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Apple Scab, consult with local agricultural experts for suitable fungicides such as Captan or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Apple-Fire-Blight",
          "symptoms": "Apple Fire Blight presents as wilting, blackening, and 'shepherd's crook' appearance in branches, often with ooze. Severe infections can lead to tree dieback and fruit loss.",
          "prevention": [
            "1. Plant fire blight-resistant apple varieties.",
            "2. Prune regularly to remove infected branches and maintain open canopies.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Maintain orchard hygiene by removing diseased plant material.",
            "5. Monitor for disease-prone weather conditions.",
            "6. Collaborate with local agricultural experts for guidance.",
            "7. Educate orchard workers on disease recognition and prevention.",
            "8. Implement strict sanitation protocols during orchard operations.",
            "9. Train personnel in proper pruning techniques.",
            "10. Adjust irrigation practices to reduce disease risk."
          ],
          "management": [
            "1. Prune and remove infected branches promptly, sterilizing tools between cuts.",
            "2. Apply antibiotics as directed by experts during bloom.",
            "3. Promote natural predators of fire blight bacteria.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Use fire blight-resistant apple varieties if available.",
            "7. Isolate severely affected trees or areas for containment.",
            "8. Monitor tree health and fruit quality closely.",
            "9. Develop a fire blight management plan.",
            "10. Collaborate with neighboring orchards to manage disease collectively."
          ],
          "pesticides": [
            "For managing Apple Fire Blight, consult with local agricultural experts for suitable antibiotic treatments. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Apple-Powdery-Mildew",
          "symptoms": "Apple Powdery Mildew manifests as white, powdery growth on apple leaves, shoots, and fruit, affecting photosynthesis and fruit quality. Severe infections can lead to defoliation.",
          "prevention": [
            "1. Choose powdery mildew-resistant apple varieties.",
            "2. Maintain proper tree spacing to enhance air circulation.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Avoid excessive nitrogen application.",
            "5. Prune to improve sunlight penetration and reduce humidity.",
            "6. Monitor humidity levels in the orchard.",
            "7. Collaborate with local agricultural experts for advice.",
            "8. Educate orchard workers on disease recognition and prevention.",
            "9. Adjust irrigation practices to minimize leaf wetness.",
            "10. Use disease-free planting material."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust nitrogen application to minimize disease risk.",
            "3. Promote natural predators of powdery mildew pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor tree health and fruit quality closely.",
            "8. Develop a powdery mildew management plan.",
            "9. Consider organic fungicide options.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For effective management of Apple Powdery Mildew, consult with local agricultural experts for suitable fungicides like Sulfur or Neem oil. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Apple-Cedar-Apple-Rust",
          "symptoms": "Apple Cedar Apple Rust is identified by orange, spore-producing lesions on apple leaves and fruit, leading to reduced fruit quality. It requires an alternate host, such as cedar or juniper.",
          "prevention": [
            "1. Manage and remove nearby cedar or juniper hosts.",
            "2. Apply fungicides preventively during disease-prone periods.",
            "3. Prune to improve air circulation in the orchard.",
            "4. Educate orchard workers on disease recognition and prevention.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Maintain proper tree spacing for ventilation.",
            "7. Adjust irrigation practices to minimize leaf wetness.",
            "8. Monitor weather conditions conducive to rust development.",
            "9. Use resistant apple varieties if available.",
            "10. Apply fungicides to cedar or juniper hosts."
          ],
          "management": [
            "1. Remove and destroy infected apple leaves and fruit.",
            "2. Apply fungicides preventively as advised by experts.",
            "3. Promote natural predators of rust pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor tree health and fruit quality closely.",
            "8. Develop a Cedar Apple Rust management plan.",
            "9. Collaborate with neighboring properties to manage alternate hosts.",
            "10. Manage orchard humidity levels."
          ],
          "pesticides": [
            "For managing Apple Cedar Apple Rust, consult with local agricultural experts for suitable fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Apple-Black-Rot",
          "symptoms": "Apple Black Rot exhibits as circular, black lesions on apple fruit, often with concentric rings, causing fruit rot and loss. It thrives in wet conditions.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune to improve air circulation and reduce humidity in the orchard.",
            "3. Remove and destroy infected fruit and plant material.",
            "4. Maintain proper tree spacing for ventilation.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Collaborate with local agricultural experts for guidance.",
            "7. Adjust irrigation practices to minimize leaf wetness.",
            "8. Monitor weather conditions conducive to black rot development.",
            "9. Use disease-resistant apple varieties if available.",
            "10. Implement strict sanitation protocols during orchard operations."
          ],
          "management": [
            "1. Remove and destroy infected apple fruit and plant material.",
            "2. Apply fungicides preventively as advised by experts.",
            "3. Promote natural predators of black rot pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Black Rot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For effective management of Apple Black Rot, consult with local agricultural experts for suitable fungicides such as Thiophanate-methyl or Captan. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "mango",
      "diseases": [
        {
          "name": "Mango-Anthracnose",
          "symptoms": "Mango Anthracnose manifests as dark, sunken lesions on mango fruit, leaves, and stems, often with pink spore masses. It leads to fruit rot, defoliation, and yield loss.",
          "prevention": [
            "1. Prune to improve air circulation in the orchard.",
            "2. Apply copper-based fungicides preventively during flowering and fruit setting.",
            "3. Remove and destroy infected fruit and plant material.",
            "4. Practice proper sanitation to limit disease spread.",
            "5. Monitor humidity levels in the orchard.",
            "6. Collaborate with local agricultural experts for advice.",
            "7. Educate orchard workers on disease recognition and prevention.",
            "8. Adjust irrigation practices to minimize leaf wetness.",
            "9. Monitor weather conditions conducive to Anthracnose development.",
            "10. Implement strict sanitation protocols during orchard operations."
          ],
          "management": [
            "1. Remove and destroy infected mango fruit and plant material.",
            "2. Apply copper-based fungicides as directed by experts.",
            "3. Promote natural predators of Anthracnose pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop an Anthracnose management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For effective management of Mango Anthracnose, consult with local agricultural experts for suitable copper-based fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Mango-Powdery-Mildew",
          "symptoms": "Mango Powdery Mildew appears as white, powdery patches on mango leaves, shoots, and fruit, affecting photosynthesis and fruit quality. It thrives in dry conditions.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune to improve air circulation and reduce humidity in the orchard.",
            "3. Maintain proper tree spacing for ventilation.",
            "4. Educate orchard workers on disease recognition and prevention.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Adjust irrigation practices to minimize leaf wetness.",
            "7. Monitor humidity levels in the orchard.",
            "8. Use disease-resistant mango varieties if available.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Consider organic fungicide options."
          ],
          "management": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Adjust irrigation practices to minimize leaf wetness.",
            "3. Promote natural predators of powdery mildew pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor tree health and fruit quality closely.",
            "8. Develop a Powdery Mildew management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For effective management of Mango Powdery Mildew, consult with local agricultural experts for suitable fungicides such as Sulphur or Neem oil. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Mango-Black-Sooty-Mold",
          "symptoms": "Mango Black Sooty Mold presents as a dark, sooty layer on mango leaves, fruit, and stems, often associated with honeydew excreted by sap-sucking insects. It affects fruit quality and photosynthesis.",
          "prevention": [
            "1. Control sap-sucking insects like aphids and mealybugs.",
            "2. Apply insecticides or neem oil to manage insect populations.",
            "3. Promote natural predators of sap-sucking insects.",
            "4. Prune to improve air circulation in the orchard.",
            "5. Maintain proper tree spacing for ventilation.",
            "6. Educate orchard workers on disease recognition and prevention.",
            "7. Collaborate with local agricultural experts for guidance.",
            "8. Adjust irrigation practices to minimize honeydew production.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Monitor and manage humidity levels in the orchard."
          ],
          "management": [
            "1. Control sap-sucking insects through timely insecticide applications.",
            "2. Prune to remove heavily infested plant parts.",
            "3. Promote natural predators of sap-sucking insects.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor tree health and fruit quality closely.",
            "8. Develop a Black Sooty Mold management plan.",
            "9. Collaborate with neighboring orchards to manage sap-sucking insects.",
            "10. Continue insect monitoring for timely interventions."
          ],
          "pesticides": [
            "For managing Mango Black Sooty Mold, consult with local agricultural experts for suitable insecticides or neem oil. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Mango-Bacterial-Black-Spot",
          "symptoms": "Mango Bacterial Black Spot appears as small, dark lesions with a yellow halo on mango fruit and leaves. It leads to fruit spotting and defoliation, affecting fruit quality and tree health.",
          "prevention": [
            "1. Prune to improve air circulation in the orchard.",
            "2. Remove and destroy infected fruit and plant material.",
            "3. Apply copper-based fungicides preventively during flowering and fruit setting.",
            "4. Maintain proper tree spacing for ventilation.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Collaborate with local agricultural experts for advice.",
            "7. Adjust irrigation practices to minimize leaf wetness.",
            "8. Monitor weather conditions conducive to bacterial black spot development.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Use disease-resistant mango varieties if available."
          ],
          "management": [
            "1. Remove and destroy infected mango fruit and plant material.",
            "2. Apply copper-based fungicides as directed by experts.",
            "3. Promote natural predators of bacterial black spot pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Bacterial Black Spot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For effective management of Mango Bacterial Black Spot, consult with local agricultural experts for suitable copper-based fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Mango-Pink-Disease",
          "symptoms": "Mango Pink Disease is identified by pink, gelatinous growth on mango branches, often causing dieback. It leads to reduced tree health and fruit production.",
          "prevention": [
            "1. Prune to remove infected branches and promote air circulation.",
            "2. Apply copper-based fungicides or Bordeaux mixture preventively.",
            "3. Remove and destroy infected plant material.",
            "4. Maintain proper tree spacing for ventilation.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Collaborate with local agricultural experts for guidance.",
            "7. Adjust irrigation practices to minimize moisture on branches.",
            "8. Monitor weather conditions conducive to Pink Disease development.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Use disease-resistant mango varieties if available."
          ],
          "management": [
            "1. Prune and remove infected mango branches promptly, sterilizing tools between cuts.",
            "2. Apply copper-based fungicides or Bordeaux mixture as advised by experts.",
            "3. Promote natural predators of Pink Disease pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected trees or areas for containment.",
            "7. Monitor tree health closely.",
            "8. Develop a Pink Disease management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For managing Mango Pink Disease, consult with local agricultural experts for suitable copper-based fungicides or Bordeaux mixture. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "banana",
      "diseases": [
        {
          "name": "Banana-Panama-Disease",
          "symptoms": "Banana Panama Disease, caused by the Fusarium wilt fungus, exhibits as yellowing and wilting of lower leaves, progressing to complete wilting and death of the banana plant. It leads to severe yield loss.",
          "prevention": [
            "1. Plant disease-resistant banana varieties.",
            "2. Use disease-free planting material.",
            "3. Implement strict sanitation protocols to prevent soil contamination.",
            "4. Avoid planting in infested soils.",
            "5. Quarantine and destroy infected plants to prevent spread.",
            "6. Monitor soil health and fertility.",
            "7. Collaborate with local agricultural experts for guidance.",
            "8. Adjust irrigation practices to minimize soil moisture.",
            "9. Implement crop rotation with non-host plants.",
            "10. Use biocontrol agents where applicable."
          ],
          "management": [
            "1. Remove and destroy infected banana plants to limit disease spread.",
            "2. Apply soil fumigants or biocontrol agents as recommended by experts.",
            "3. Promote natural antagonists of Fusarium wilt.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate infected areas to prevent further contamination.",
            "7. Monitor soil health closely.",
            "8. Develop a Panama Disease management plan.",
            "9. Collaborate with neighboring farms to manage the disease collectively.",
            "10. Educate farmworkers on disease recognition and prevention."
          ],
          "pesticides": [
            "For effective management of Banana Panama Disease, consult with local agricultural experts for suitable soil fumigants or biocontrol agents. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Banana-Black-Sigatoka",
          "symptoms": "Banana Black Sigatoka appears as dark, irregular spots with yellow halos on banana leaves, leading to leaf necrosis and reduced photosynthesis. Severe infections affect fruit development.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Implement a regular leaf pruning regime.",
            "3. Maintain proper spacing between banana plants.",
            "4. Monitor and control humidity levels in the plantation.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Educate farmworkers on disease recognition and prevention.",
            "7. Adjust irrigation practices to reduce leaf wetness.",
            "8. Quarantine and destroy infected leaves.",
            "9. Implement strict sanitation protocols during plantation operations.",
            "10. Use disease-resistant banana varieties where available."
          ],
          "management": [
            "1. Prune and remove heavily infected banana leaves.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Sigatoka pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor leaf health closely.",
            "8. Develop a Black Sigatoka management plan.",
            "9. Collaborate with neighboring plantations to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Banana Black Sigatoka, consult with local agricultural experts for suitable fungicides such as Mancozeb or Chlorothalonil. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Banana-Leaf-Spot",
          "symptoms": "Banana Leaf Spot presents as small, dark lesions on banana leaves, often with yellow halos. It affects photosynthesis and can lead to leaf defoliation, reducing yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Maintain proper spacing between banana plants for air circulation.",
            "3. Monitor and control humidity levels in the plantation.",
            "4. Collaborate with local agricultural experts for guidance.",
            "5. Educate farmworkers on disease recognition and prevention.",
            "6. Adjust irrigation practices to reduce leaf wetness.",
            "7. Quarantine and destroy infected leaves.",
            "8. Implement strict sanitation protocols during plantation operations.",
            "9. Use disease-resistant banana varieties where available.",
            "10. Practice regular leaf pruning."
          ],
          "management": [
            "1. Prune and remove heavily infected banana leaves.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor leaf health closely.",
            "8. Develop a Leaf Spot management plan.",
            "9. Collaborate with neighboring plantations to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Banana Leaf Spot, consult with local agricultural experts for suitable fungicides like Mancozeb or Copper-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Banana-Root-Rot",
          "symptoms": "Banana Root Rot is characterized by wilting, yellowing, and rotting of banana plants, starting at the roots and progressing upwards. It leads to plant death and yield loss.",
          "prevention": [
            "1. Plant disease-resistant banana varieties.",
            "2. Use disease-free planting material.",
            "3. Implement strict sanitation protocols to prevent soil contamination.",
            "4. Avoid planting in infested soils.",
            "5. Quarantine and destroy infected plants to prevent spread.",
            "6. Monitor soil health and fertility.",
            "7. Collaborate with local agricultural experts for guidance.",
            "8. Adjust irrigation practices to minimize soil moisture.",
            "9. Implement crop rotation with non-host plants.",
            "10. Use biocontrol agents where applicable."
          ],
          "management": [
            "1. Remove and destroy infected banana plants to limit disease spread.",
            "2. Apply soil fumigants or biocontrol agents as recommended by experts.",
            "3. Promote natural antagonists of Root Rot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate infected areas to prevent further contamination.",
            "7. Monitor soil health closely.",
            "8. Develop a Root Rot management plan.",
            "9. Collaborate with neighboring plantations to manage disease collectively.",
            "10. Educate farmworkers on disease recognition and prevention."
          ],
          "pesticides": [
            "For effective management of Banana Root Rot, consult with local agricultural experts for suitable soil fumigants or biocontrol agents. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Banana-Sigatoka-Leaf-Spot",
          "symptoms": "Banana Sigatoka Leaf Spot appears as yellow spots on banana leaves, which later develop into brown lesions with a yellow halo. It affects photosynthesis and can lead to reduced yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Maintain proper spacing between banana plants for air circulation.",
            "3. Monitor and control humidity levels in the plantation.",
            "4. Collaborate with local agricultural experts for guidance.",
            "5. Educate farmworkers on disease recognition and prevention.",
            "6. Adjust irrigation practices to reduce leaf wetness.",
            "7. Quarantine and destroy infected leaves.",
            "8. Implement strict sanitation protocols during plantation operations.",
            "9. Use disease-resistant banana varieties where available.",
            "10. Practice regular leaf pruning."
          ],
          "management": [
            "1. Prune and remove heavily infected banana leaves.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Sigatoka pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor leaf health closely.",
            "8. Develop a Sigatoka Leaf Spot management plan.",
            "9. Collaborate with neighboring plantations to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Banana Sigatoka Leaf Spot, consult with local agricultural experts for suitable fungicides like Mancozeb or Copper-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "cherry",
      "diseases": [
        {
          "name": "Cherry-Leaf-Spot",
          "symptoms": "Cherry Leaf Spot is characterized by small, circular, dark lesions on cherry leaves, often with yellow halos. It can lead to premature leaf drop and reduced fruit quality.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Maintain proper spacing between cherry trees for air circulation.",
            "3. Monitor and control humidity levels in the orchard.",
            "4. Collaborate with local agricultural experts for guidance.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Adjust irrigation practices to reduce leaf wetness.",
            "7. Quarantine and destroy infected leaves.",
            "8. Implement strict sanitation protocols during orchard operations.",
            "9. Use disease-resistant cherry varieties where available.",
            "10. Practice regular leaf pruning."
          ],
          "management": [
            "1. Prune and remove heavily infected cherry leaves.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Leaf Spot pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor leaf health closely.",
            "8. Develop a Leaf Spot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Cherry Leaf Spot, consult with local agricultural experts for suitable fungicides like Mancozeb or Copper-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cherry-Brown-Rot",
          "symptoms": "Cherry Brown Rot presents as brown, fuzzy mold on cherry fruit, often causing fruit rot and loss. It thrives in humid conditions.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune to improve air circulation in the orchard.",
            "3. Remove and destroy infected fruit and plant material.",
            "4. Maintain proper spacing between cherry trees for ventilation.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Adjust irrigation practices to minimize fruit wetness.",
            "7. Monitor weather conditions conducive to Brown Rot development.",
            "8. Use disease-resistant cherry varieties if available.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Consider organic fungicide options."
          ],
          "management": [
            "1. Remove and destroy infected cherry fruit and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Brown Rot pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Brown Rot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Implement proper pruning techniques."
          ],
          "pesticides": [
            "For effective management of Cherry Brown Rot, consult with local agricultural experts for suitable fungicides like Thiophanate-methyl or Captan. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cherry-Shothole",
          "symptoms": "Cherry Shothole appears as small, round holes in cherry leaves, often leading to leaf drop and reduced fruit quality. It thrives in wet conditions.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Maintain proper spacing between cherry trees for air circulation.",
            "3. Monitor and control humidity levels in the orchard.",
            "4. Collaborate with local agricultural experts for guidance.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Adjust irrigation practices to reduce leaf wetness.",
            "7. Quarantine and destroy infected leaves.",
            "8. Implement strict sanitation protocols during orchard operations.",
            "9. Use disease-resistant cherry varieties where available.",
            "10. Practice regular leaf pruning."
          ],
          "management": [
            "1. Prune and remove heavily infected cherry leaves.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Shothole pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor leaf health closely.",
            "8. Develop a Shothole management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Cherry Shothole, consult with local agricultural experts for suitable fungicides like Copper-based products or Chlorothalonil. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cherry-Black-Knot",
          "symptoms": "Cherry Black Knot is identified by hard, black, elongated swellings or knots on cherry branches and stems, leading to dieback and reduced fruiting.",
          "prevention": [
            "1. Prune and remove infected branches promptly.",
            "2. Burn or destroy infected plant material.",
            "3. Maintain proper spacing between cherry trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Educate orchard workers on disease recognition and prevention.",
            "7. Adjust irrigation practices to reduce branch wetness.",
            "8. Quarantine and destroy infected branches.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Practice regular branch pruning and disposal."
          ],
          "management": [
            "1. Prune and remove infected cherry branches promptly, sterilizing tools between cuts.",
            "2. Burn or destroy infected plant material.",
            "3. Promote natural antagonists of Black Knot pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor tree health closely.",
            "8. Develop a Black Knot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Cherry Black Knot, consult with local agricultural experts for suitable fungicides or Bordeaux mixture. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cherry-Bacterial-Canker",
          "symptoms": "Cherry Bacterial Canker results in small, sunken lesions on cherry fruit, as well as cankers on branches and stems. It can lead to fruit rot and dieback of branches.",
          "prevention": [
            "1. Prune and remove infected branches and cankers promptly.",
            "2. Burn or destroy infected plant material.",
            "3. Maintain proper spacing between cherry trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Educate orchard workers on disease recognition and prevention.",
            "7. Adjust irrigation practices to minimize branch wetness.",
            "8. Quarantine and destroy infected fruit and branches.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Consider copper-based bactericides."
          ],
          "management": [
            "1. Prune and remove infected cherry branches and cankers promptly, sterilizing tools between cuts.",
            "2. Burn or destroy infected plant material.",
            "3. Promote natural antagonists of Bacterial Canker pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Bacterial Canker management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consult with experts for copper-based bactericide application."
          ],
          "pesticides": [
            "For effective management of Cherry Bacterial Canker, consult with local agricultural experts for suitable copper-based bactericides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "orange",
      "diseases": [
        {
          "name": "Orange-Citrus-Canker",
          "symptoms": "Orange Citrus Canker manifests as raised, corky lesions on orange fruit, leaves, and stems. It leads to fruit blemishes, defoliation, and reduced yield.",
          "prevention": [
            "1. Prune and remove infected branches and cankers promptly.",
            "2. Burn or destroy infected plant material.",
            "3. Maintain proper spacing between orange trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Educate orchard workers on disease recognition and prevention.",
            "7. Adjust irrigation practices to minimize branch wetness.",
            "8. Quarantine and destroy infected fruit and branches.",
            "9. Implement strict sanitation protocols during orchard operations.",
            "10. Consider copper-based bactericides."
          ],
          "management": [
            "1. Prune and remove infected orange branches and cankers promptly, sterilizing tools between cuts.",
            "2. Burn or destroy infected plant material.",
            "3. Promote natural antagonists of Citrus Canker pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Citrus Canker management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consult with experts for copper-based bactericide application."
          ],
          "pesticides": [
            "For effective management of Orange Citrus Canker, consult with local agricultural experts for suitable copper-based bactericides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Orange-Citrus-Greening",
          "symptoms": "Orange Citrus Greening, also known as Huanglongbing (HLB), leads to mottled, discolored leaves, misshapen fruit, and tree decline. It causes significant yield loss.",
          "prevention": [
            "1. Use disease-free citrus planting material from reputable sources.",
            "2. Implement strict quarantine measures to prevent infected material from entering the orchard.",
            "3. Collaborate with local agricultural experts for guidance on early detection and control.",
            "4. Remove and destroy infected trees to prevent further spread.",
            "5. Promote biological control agents for disease vector management.",
            "6. Monitor orchard health and nutrition regularly.",
            "7. Adjust irrigation practices to avoid prolonged moisture on leaves and roots.",
            "8. Educate orchard workers on disease recognition and prevention.",
            "9. Apply systemic insecticides to control disease vectors.",
            "10. Consider disease-resistant citrus varieties if available."
          ],
          "management": [
            "1. Remove and destroy infected trees promptly.",
            "2. Collaborate with agricultural agencies for vector control and disease management strategies.",
            "3. Promote beneficial insect populations for vector control.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate and remove infected trees for containment.",
            "7. Monitor tree health and fruit quality closely.",
            "8. Develop a Citrus Greening management plan.",
            "9. Collaborate with neighboring orchards to manage the disease collectively.",
            "10. Implement proper nutrition and soil management."
          ],
          "pesticides": [
            "For effective management of Orange Citrus Greening, consult with local agricultural experts for suitable systemic insecticides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Orange-Alternaria-Fruit-Rot",
          "symptoms": "Orange Alternaria Fruit Rot is identified by dark, sunken lesions on fruit, often with concentric rings. It leads to fruit decay and post-harvest losses.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Harvest oranges at the correct maturity stage to prevent injury.",
            "3. Maintain proper spacing between orange trees for ventilation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Educate orchard workers on disease recognition and prevention.",
            "7. Implement strict sanitation protocols during orchard operations.",
            "8. Adjust irrigation practices to minimize fruit wetness.",
            "9. Use disease-resistant orange varieties where available.",
            "10. Properly handle and store harvested fruit."
          ],
          "management": [
            "1. Remove and destroy infected oranges and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Alternaria pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop an Alternaria Fruit Rot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Orange Alternaria Fruit Rot, consult with local agricultural experts for suitable fungicides like Azoxystrobin or Pyraclostrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Orange-Phytophthora-Rot",
          "symptoms": "Orange Phytophthora Rot leads to water-soaked lesions on fruit, often with a moldy appearance. It causes fruit decay, reduced yield, and tree decline.",
          "prevention": [
            "1. Improve orchard drainage to prevent waterlogged conditions.",
            "2. Apply fungicides preventively during disease-prone periods.",
            "3. Maintain proper spacing between orange trees for air circulation.",
            "4. Collaborate with local agricultural experts for guidance.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Adjust irrigation practices to avoid prolonged root wetness.",
            "7. Quarantine and destroy infected fruit.",
            "8. Implement strict sanitation protocols during orchard operations.",
            "9. Use disease-resistant orange varieties where available.",
            "10. Practice proper pruning and tree care."
          ],
          "management": [
            "1. Remove and destroy infected oranges and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Phytophthora pathogens.",
            "4. Improve orchard drainage to minimize disease incidence.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality and tree health closely.",
            "8. Develop a Phytophthora Rot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Orange Phytophthora Rot, consult with local agricultural experts for suitable fungicides like Metalaxyl or Phosphorous acid-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Orange-Citrus-Scab",
          "symptoms": "Orange Citrus Scab presents as raised, scaly lesions on fruit, leaves, and stems. It leads to fruit blemishes and reduced marketability.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Maintain proper spacing between orange trees for air circulation.",
            "3. Monitor and control humidity levels in the orchard.",
            "4. Collaborate with local agricultural experts for guidance.",
            "5. Educate orchard workers on disease recognition and prevention.",
            "6. Adjust irrigation practices to reduce leaf and fruit wetness.",
            "7. Quarantine and destroy infected fruit and leaves.",
            "8. Implement strict sanitation protocols during orchard operations.",
            "9. Use disease-resistant orange varieties where available.",
            "10. Properly dispose of infected plant material."
          ],
          "management": [
            "1. Remove and destroy infected oranges and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Citrus Scab pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Citrus Scab management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Orange Citrus Scab, consult with local agricultural experts for suitable fungicides like Mancozeb or Sulfur-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "grapes",
      "diseases": [
        {
          "name": "Grape-Powdery-Mildew",
          "symptoms": "Grape Powdery Mildew appears as white, powdery spots on leaves, stems, and fruit. It leads to reduced photosynthesis, fruit quality, and yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune vines for improved air circulation.",
            "3. Maintain proper vine spacing to reduce humidity buildup.",
            "4. Monitor and control humidity levels in the vineyard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Adjust irrigation practices to avoid leaf wetness.",
            "7. Remove and destroy infected plant material.",
            "8. Implement strict sanitation protocols during vineyard operations.",
            "9. Use disease-resistant grape varieties where available.",
            "10. Practice regular leaf removal in the fruit zone."
          ],
          "management": [
            "1. Remove and destroy infected grape clusters and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular vineyard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor grape quality closely.",
            "8. Develop a Powdery Mildew management plan.",
            "9. Collaborate with neighboring vineyards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Grape Powdery Mildew, consult with local agricultural experts for suitable fungicides like Sulfur or Trifloxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Grape-Downy-Mildew",
          "symptoms": "Grape Downy Mildew leads to yellow spots on leaves, which turn brown. It can cause defoliation and fruit rot, reducing yield and quality.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune vines for improved air circulation.",
            "3. Maintain proper vine spacing to reduce humidity buildup.",
            "4. Monitor and control humidity levels in the vineyard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Adjust irrigation practices to minimize leaf wetness.",
            "7. Remove and destroy infected plant material.",
            "8. Implement strict sanitation protocols during vineyard operations.",
            "9. Use disease-resistant grape varieties where available.",
            "10. Practice canopy management to improve sunlight penetration."
          ],
          "management": [
            "1. Remove and destroy infected grape clusters and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Downy Mildew pathogens.",
            "4. Conduct regular vineyard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor grape quality closely.",
            "8. Develop a Downy Mildew management plan.",
            "9. Collaborate with neighboring vineyards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Grape Downy Mildew, consult with local agricultural experts for suitable fungicides like Mancozeb or Metalaxyl. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Grape-Black-Rot",
          "symptoms": "Grape Black Rot causes brown lesions on leaves, fruit, and stems. Infected fruit shrivels and becomes mummified. It results in significant fruit loss.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune vines for improved air circulation and reduced canopy density.",
            "3. Maintain proper vine spacing to allow for better airflow.",
            "4. Monitor and control humidity levels in the vineyard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Adjust irrigation practices to minimize leaf wetness.",
            "7. Remove and destroy infected plant material, including mummies.",
            "8. Implement strict sanitation protocols during vineyard operations.",
            "9. Use disease-resistant grape varieties where available.",
            "10. Practice cluster thinning for better fruit exposure."
          ],
          "management": [
            "1. Remove and destroy infected grape clusters and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Black Rot pathogens.",
            "4. Conduct regular vineyard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor grape quality closely.",
            "8. Develop a Black Rot management plan.",
            "9. Collaborate with neighboring vineyards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Grape Black Rot, consult with local agricultural experts for suitable fungicides like Pyraclostrobin or Propiconazole. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Grape-Anthracnose",
          "symptoms": "Grape Anthracnose causes circular, sunken lesions on fruit and leaves. It can lead to fruit rot and defoliation, reducing grape quality and yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Prune vines for improved air circulation and light penetration.",
            "3. Maintain proper vine spacing for ventilation.",
            "4. Monitor and control humidity levels in the vineyard.",
            "5. Collaborate with local agricultural experts for guidance.",
            "6. Adjust irrigation practices to minimize leaf wetness.",
            "7. Remove and destroy infected plant material.",
            "8. Implement strict sanitation protocols during vineyard operations.",
            "9. Use disease-resistant grape varieties where available.",
            "10. Practice regular canopy management."
          ],
          "management": [
            "1. Remove and destroy infected grape clusters and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Anthracnose pathogens.",
            "4. Conduct regular vineyard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor grape quality closely.",
            "8. Develop an Anthracnose management plan.",
            "9. Collaborate with neighboring vineyards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Grape Anthracnose, consult with local agricultural experts for suitable fungicides like Mancozeb or Copper-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Grape-Leafroll-Virus",
          "symptoms": "Grape Leafroll Virus causes discoloration and rolling of grape leaves. It leads to delayed ripening, reduced sugar content, and lower fruit quality.",
          "prevention": [
            "1. Plant certified virus-free grapevines from reputable nurseries.",
            "2. Implement strict sanitation practices to prevent virus spread.",
            "3. Collaborate with local agricultural experts for virus detection.",
            "4. Remove and destroy infected vines to prevent further spread.",
            "5. Use virus-tested planting material.",
            "6. Monitor vineyard health regularly for virus symptoms.",
            "7. Consider the use of insecticides to control virus vectors.",
            "8. Educate vineyard workers on virus recognition and prevention.",
            "9. Isolate and mark infected vines for removal.",
            "10. Consult with experts for vineyard management strategies."
          ],
          "management": [
            "1. Remove and destroy infected grapevines promptly.",
            "2. Collaborate with agricultural agencies for virus control strategies.",
            "3. Monitor vineyard health and virus prevalence.",
            "4. Isolate and mark infected vines for removal.",
            "5. Implement rigorous sanitation measures.",
            "6. Replace infected vines with virus-free planting material.",
            "7. Educate vineyard workers on virus prevention.",
            "8. Maintain detailed records of virus detection and actions taken.",
            "9. Consider insecticide applications for vector control.",
            "10. Collaborate with neighboring vineyards to manage the virus collectively."
          ],
          "pesticides": [
            "There are no specific pesticides for Grape Leafroll Virus. Focus on prevention, early detection, and vine removal to manage this virus. Consult with local agricultural experts for guidance."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "watermelon",
      "diseases": [
        {
          "name": "Watermelon-Anthracnose",
          "symptoms": "Watermelon Anthracnose displays as dark, sunken lesions on fruit, often with pinkish spore masses. It can cause fruit rot and yield loss.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant watermelon varieties when available.",
            "3. Practice proper spacing between plants for air circulation.",
            "4. Monitor and control humidity levels in the field.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols during cultivation.",
            "8. Adjust irrigation practices to minimize leaf and fruit wetness.",
            "9. Use drip irrigation to reduce leaf wetness.",
            "10. Harvest fruit at the right maturity to prevent injury."
          ],
          "management": [
            "1. Remove and destroy infected watermelon fruit and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Anthracnose pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop an Anthracnose management plan.",
            "9. Collaborate with neighboring growers to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Watermelon Anthracnose, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Azoxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Watermelon-Powdery-Mildew",
          "symptoms": "Watermelon Powdery Mildew appears as white, powdery spots on leaves, stems, and fruit. It leads to reduced photosynthesis, fruit quality, and yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant watermelon varieties when available.",
            "3. Maintain proper spacing between plants for air circulation.",
            "4. Monitor and control humidity levels in the field.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols during cultivation.",
            "8. Use resistant rootstocks where possible.",
            "9. Adjust irrigation practices to avoid leaf wetness.",
            "10. Practice crop rotation with non-host crops."
          ],
          "management": [
            "1. Remove and destroy infected watermelon leaves and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Powdery Mildew management plan.",
            "9. Collaborate with neighboring growers to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Watermelon Powdery Mildew, consult with local agricultural experts for suitable fungicides like Sulfur or Potassium bicarbonate. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Watermelon-Downy-Mildew",
          "symptoms": "Watermelon Downy Mildew leads to yellow spots on leaves, which turn brown. It can cause defoliation, fruit rot, and reduced yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant watermelon varieties when available.",
            "3. Maintain proper spacing between plants for air circulation.",
            "4. Monitor and control humidity levels in the field.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols during cultivation.",
            "8. Adjust irrigation practices to minimize leaf wetness.",
            "9. Use resistant rootstocks where possible.",
            "10. Practice crop rotation with non-host crops."
          ],
          "management": [
            "1. Remove and destroy infected watermelon leaves and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Downy Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Downy Mildew management plan.",
            "9. Collaborate with neighboring growers to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Watermelon Downy Mildew, consult with local agricultural experts for suitable fungicides like Mancozeb or Metalaxyl. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Watermelon-Blossom-End-Rot",
          "symptoms": "Watermelon Blossom End Rot leads to dark, sunken lesions at the blossom end of the fruit. It's caused by calcium deficiency and fluctuations in soil moisture.",
          "prevention": [
            "1. Ensure proper soil calcium levels through soil testing and amendments.",
            "2. Maintain consistent soil moisture through proper irrigation practices.",
            "3. Avoid excessive nitrogen fertilization, which can affect calcium uptake.",
            "4. Use mulch to regulate soil temperature and moisture.",
            "5. Apply a calcium-containing foliar spray during fruit development.",
            "6. Monitor for signs of calcium deficiency and address promptly.",
            "7. Choose watermelon varieties with lower susceptibility to Blossom End Rot.",
            "8. Practice crop rotation to manage soil nutrient balance.",
            "9. Implement pH adjustments if necessary.",
            "10. Educate growers on proper irrigation and fertilization."
          ],
          "management": [
            "1. Adjust soil calcium levels based on soil test results and expert recommendations.",
            "2. Maintain consistent soil moisture through controlled irrigation.",
            "3. Monitor and address any nutrient imbalances in the soil.",
            "4. Remove affected fruits promptly to prevent disease spread.",
            "5. Educate growers on proper calcium management techniques.",
            "6. Implement mulching to regulate soil moisture and temperature.",
            "7. Maintain detailed records of soil tests and nutrient management.",
            "8. Collaborate with agricultural experts for guidance on nutrient management.",
            "9. Practice regular fruit monitoring for early detection of Blossom End Rot.",
            "10. Consider calcium-containing fertilizers or foliar sprays as needed."
          ],
          "pesticides": [
            "There are no specific pesticides for Watermelon Blossom End Rot since it's primarily a calcium deficiency disorder. Focus on soil testing, calcium management, and proper irrigation. Consult with local agricultural experts for guidance."
          ]
        },
        {
          "name": "Watermelon-Mosaic-Virus",
          "symptoms": "Watermelon Mosaic Virus causes mosaic patterns on leaves, stunted growth, and yellowing. Infected fruit may have rough, distorted surfaces.",
          "prevention": [
            "1. Plant virus-free watermelon seeds from reputable sources.",
            "2. Use insecticides to control aphid vectors.",
            "3. Monitor for aphid activity and implement control measures.",
            "4. Remove and destroy infected plants to prevent virus spread.",
            "5. Isolate infected plants for containment.",
            "6. Educate growers on virus recognition and prevention.",
            "7. Consider barrier plants to deter aphids from entering the field.",
            "8. Collaborate with local agricultural experts for virus detection.",
            "9. Use reflective mulch to deter aphids.",
            "10. Implement strict sanitation practices in the field."
          ],
          "management": [
            "1. Remove and destroy infected watermelon plants promptly.",
            "2. Collaborate with agricultural agencies for virus control strategies.",
            "3. Monitor field health and virus prevalence.",
            "4. Isolate infected plants for containment.",
            "5. Implement rigorous sanitation measures.",
            "6. Replace infected plants with virus-free planting material.",
            "7. Educate growers on virus prevention.",
            "8. Maintain detailed records of virus detection and actions taken.",
            "9. Consider insecticide applications for vector control.",
            "10. Collaborate with neighboring growers to manage the virus collectively."
          ],
          "pesticides": [
            "There are no specific pesticides for Watermelon Mosaic Virus. Focus on prevention, early detection, and plant removal to manage this virus. Consult with local agricultural experts for guidance."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "papaya",
      "diseases": [
        {
          "name": "Papaya-Ring-Spot-Virus",
          "symptoms": "Papaya Ring Spot Virus causes yellowing and mosaic patterns on leaves. Infected fruit may have raised rings or spots. It leads to reduced fruit quality and yield.",
          "prevention": [
            "1. Plant virus-tested papaya seeds from reputable sources.",
            "2. Use insecticides to control aphid vectors.",
            "3. Monitor for aphid activity and implement control measures.",
            "4. Remove and destroy infected plants to prevent virus spread.",
            "5. Isolate infected plants for containment.",
            "6. Educate growers on virus recognition and prevention.",
            "7. Consider barrier plants to deter aphids from entering the orchard.",
            "8. Collaborate with local agricultural experts for virus detection.",
            "9. Use reflective mulch to deter aphids.",
            "10. Implement strict sanitation practices in the orchard."
          ],
          "management": [
            "1. Remove and destroy infected papaya plants promptly.",
            "2. Collaborate with agricultural agencies for virus control strategies.",
            "3. Monitor orchard health and virus prevalence.",
            "4. Isolate infected plants for containment.",
            "5. Implement rigorous sanitation measures.",
            "6. Replace infected plants with virus-free planting material.",
            "7. Educate growers on virus prevention.",
            "8. Maintain detailed records of virus detection and actions taken.",
            "9. Consider insecticide applications for vector control.",
            "10. Collaborate with neighboring orchards to manage the virus collectively."
          ],
          "pesticides": [
            "There are no specific pesticides for Papaya Ring Spot Virus. Focus on prevention, early detection, and plant removal to manage this virus. Consult with local agricultural experts for guidance."
          ]
        },
        {
          "name": "Papaya-Black-Spot",
          "symptoms": "Papaya Black Spot presents as dark, sunken lesions on fruit and leaves. Infected fruit can become unmarketable due to cosmetic damage.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant papaya varieties when available.",
            "3. Maintain proper spacing between papaya trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols in the orchard.",
            "8. Use drip irrigation to minimize leaf wetness.",
            "9. Educate orchard workers on disease recognition and prevention.",
            "10. Harvest fruit at the right maturity to prevent injury."
          ],
          "management": [
            "1. Remove and destroy infected papaya fruit and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Black Spot pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Black Spot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Papaya Black Spot, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Papaya-Mosaic-Virus",
          "symptoms": "Papaya Mosaic Virus causes mosaic patterns on leaves, stunted growth, and yellowing. Infected fruit may have rough, distorted surfaces.",
          "prevention": [
            "1. Plant virus-free papaya seeds from reputable sources.",
            "2. Use insecticides to control aphid vectors.",
            "3. Monitor for aphid activity and implement control measures.",
            "4. Remove and destroy infected plants to prevent virus spread.",
            "5. Isolate infected plants for containment.",
            "6. Educate growers on virus recognition and prevention.",
            "7. Consider barrier plants to deter aphids from entering the orchard.",
            "8. Collaborate with local agricultural experts for virus detection.",
            "9. Use reflective mulch to deter aphids.",
            "10. Implement strict sanitation practices in the orchard."
          ],
          "management": [
            "1. Remove and destroy infected papaya plants promptly.",
            "2. Collaborate with agricultural agencies for virus control strategies.",
            "3. Monitor orchard health and virus prevalence.",
            "4. Isolate infected plants for containment.",
            "5. Implement rigorous sanitation measures.",
            "6. Replace infected plants with virus-free planting material.",
            "7. Educate growers on virus prevention.",
            "8. Maintain detailed records of virus detection and actions taken.",
            "9. Consider insecticide applications for vector control.",
            "10. Collaborate with neighboring orchards to manage the virus collectively."
          ],
          "pesticides": [
            "There are no specific pesticides for Papaya Mosaic Virus. Focus on prevention, early detection, and plant removal to manage this virus. Consult with local agricultural experts for guidance."
          ]
        },
        {
          "name": "Papaya-Powdery-Mildew",
          "symptoms": "Papaya Powdery Mildew appears as white, powdery spots on leaves, stems, and fruit. It leads to reduced photosynthesis, fruit quality, and yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant papaya varieties when available.",
            "3. Maintain proper spacing between papaya trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols in the orchard.",
            "8. Use resistant rootstocks where possible.",
            "9. Adjust irrigation practices to minimize leaf wetness.",
            "10. Practice crop rotation with non-host crops."
          ],
          "management": [
            "1. Remove and destroy infected papaya leaves and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Powdery Mildew management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Papaya Powdery Mildew, consult with local agricultural experts for suitable fungicides like Sulfur or Potassium bicarbonate. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Papaya-Phytophthora-Rot",
          "symptoms": "Papaya Phytophthora Rot causes dark, water-soaked lesions on fruit and roots. It leads to fruit decay and wilting of plants.",
          "prevention": [
            "1. Implement proper drainage to prevent waterlogging in the orchard.",
            "2. Avoid over-irrigation, which can create favorable conditions for rot.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Plant disease-resistant papaya varieties when available.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation protocols in the orchard.",
            "7. Use well-draining soil for papaya cultivation.",
            "8. Maintain proper spacing between papaya trees for air circulation.",
            "9. Monitor soil moisture levels to prevent excessive wetness.",
            "10. Practice crop rotation with non-host crops."
          ],
          "management": [
            "1. Remove and destroy infected papaya fruit and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Phytophthora pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor soil drainage and moisture levels.",
            "8. Develop a Phytophthora Rot management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Papaya Phytophthora Rot, consult with local agricultural experts for suitable fungicides like Metalaxyl or Dimethomorph. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "fruit-tree",
      "name": "pomegranate",
      "diseases": [
        {
          "name": "Pomegranate-Anthracnose",
          "symptoms": "Pomegranate Anthracnose manifests as dark, sunken lesions on fruit, often with pinkish spore masses. It can cause fruit rot and yield loss.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant pomegranate varieties when available.",
            "3. Maintain proper spacing between trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols in the orchard.",
            "8. Adjust irrigation practices to minimize leaf and fruit wetness.",
            "9. Use drip irrigation to reduce leaf wetness.",
            "10. Harvest fruit at the right maturity to prevent injury."
          ],
          "management": [
            "1. Remove and destroy infected pomegranate fruit and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Anthracnose pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop an Anthracnose management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Pomegranate Anthracnose, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Azoxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Pomegranate-Powdery-Mildew",
          "symptoms": "Pomegranate Powdery Mildew appears as white, powdery spots on leaves and fruit. It leads to reduced photosynthesis, fruit quality, and yield.",
          "prevention": [
            "1. Apply fungicides preventively during disease-prone periods.",
            "2. Plant disease-resistant pomegranate varieties when available.",
            "3. Maintain proper spacing between trees for air circulation.",
            "4. Monitor and control humidity levels in the orchard.",
            "5. Rotate crops to reduce pathogen buildup.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols in the orchard.",
            "8. Use resistant rootstocks where possible.",
            "9. Adjust irrigation practices to avoid leaf wetness.",
            "10. Practice crop rotation with non-host crops."
          ],
          "management": [
            "1. Remove and destroy infected pomegranate leaves and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular orchard inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Powdery Mildew management plan.",
            "9. Collaborate with neighboring orchards to manage disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Pomegranate Powdery Mildew, consult with local agricultural experts for suitable fungicides like Sulfur or Potassium bicarbonate. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Pomegranate-Heart-Rot",
          "symptoms": "Pomegranate Heart Rot causes fruit decay with a foul odor and dark, watery lesions inside the fruit. It can lead to significant post-harvest losses.",
          "prevention": [
            "1. Harvest fruit at the right maturity to prevent injuries.",
            "2. Avoid rough handling during harvesting and transportation.",
            "3. Implement proper sanitation in storage and processing facilities.",
            "4. Store harvested fruit under controlled temperature and humidity.",
            "5. Use disease-free planting material.",
            "6. Monitor orchard health for early detection of Heart Rot.",
            "7. Implement strict sanitation practices in the orchard.",
            "8. Remove and destroy infected fruit promptly.",
            "9. Educate orchard workers on disease prevention.",
            "10. Collaborate with experts for post-harvest disease management."
          ],
          "management": [
            "1. Remove and destroy infected pomegranate fruit and plant material.",
            "2. Maintain proper post-harvest storage conditions.",
            "3. Implement sanitation measures in packing and storage areas.",
            "4. Conduct regular inspections during post-harvest handling.",
            "5. Educate workers on proper handling practices.",
            "6. Monitor fruit quality closely.",
            "7. Develop a Heart Rot management plan.",
            "8. Maintain detailed records of disease outbreaks and treatments.",
            "9. Collaborate with experts for post-harvest disease management.",
            "10. Consider post-harvest fungicides as necessary."
          ],
          "pesticides": [
            "For post-harvest management of Pomegranate Heart Rot, consult with local agricultural experts for suitable fungicides or treatments. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Pomegranate-Bacterial-Blight",
          "symptoms": "Pomegranate Bacterial Blight leads to wilting, canker-like lesions on branches, and fruit rot. It can cause severe tree decline.",
          "prevention": [
            "1. Plant disease-free pomegranate nursery stock.",
            "2. Use sanitized pruning tools to prevent bacterial spread.",
            "3. Avoid overhead irrigation to minimize leaf and fruit wetness.",
            "4. Implement strict sanitation practices in the orchard.",
            "5. Remove and destroy infected plant material.",
            "6. Prune affected branches promptly and disinfect tools.",
            "7. Implement copper sprays during the dormant season.",
            "8. Monitor orchard health regularly.",
            "9. Educate orchard workers on disease recognition and prevention.",
            "10. Collaborate with experts for bacterial blight management."
          ],
          "management": [
            "1. Remove and destroy infected pomegranate branches and fruit.",
            "2. Prune affected branches promptly and disinfect tools.",
            "3. Apply copper sprays during the dormant season.",
            "4. Implement sanitation measures in the orchard.",
            "5. Conduct regular inspections for bacterial blight.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Monitor tree health closely.",
            "8. Develop a Bacterial Blight management plan.",
            "9. Collaborate with experts for disease management.",
            "10. Consider copper-based bactericides as needed."
          ],
          "pesticides": [
            "For effective management of Pomegranate Bacterial Blight, consult with local agricultural experts for suitable copper-based bactericides or treatments. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Pomegranate-Fruit-Cracking",
          "symptoms": "Pomegranate Fruit Cracking causes splits or cracks on the fruit surface, making it vulnerable to diseases and reducing marketability.",
          "prevention": [
            "1. Maintain consistent irrigation to avoid fluctuations in fruit moisture.",
            "2. Apply calcium-containing sprays during fruit development.",
            "3. Avoid excessive nitrogen fertilization.",
            "4. Harvest fruit at the right maturity.",
            "5. Use mulch to regulate soil moisture.",
            "6. Implement proper pruning and training techniques.",
            "7. Monitor orchard health and moisture levels.",
            "8. Educate orchard workers on proper harvesting practices.",
            "9. Collaborate with experts for fruit cracking prevention.",
            "10. Consider rootstock selection for crack resistance."
          ],
          "management": [
            "1. Handle harvested fruit carefully to prevent further damage.",
            "2. Sort and grade cracked fruit separately for processing.",
            "3. Apply calcium-containing sprays to improve fruit quality.",
            "4. Maintain records of cracked fruit incidence.",
            "5. Implement soil and moisture management practices.",
            "6. Monitor orchard conditions for recurring issues.",
            "7. Educate orchard workers on proper handling and harvesting practices.",
            "8. Develop a Fruit Cracking management plan.",
            "9. Collaborate with experts for fruit cracking management.",
            "10. Consider post-harvest treatments for damaged fruit."
          ],
          "pesticides": [
            "There are no specific pesticides for Pomegranate Fruit Cracking. Focus on prevention measures such as calcium applications and moisture management. Consult with local agricultural experts for guidance."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "potato",
      "diseases": [
        {
          "name": "Potato-Late-Blight",
          "symptoms": "Potato Late Blight causes dark, water-soaked lesions on leaves and stems, often with a white, fuzzy growth on the underside. It leads to rapid defoliation and can rot tubers.",
          "prevention": [
            "1. Plant blight-resistant potato varieties.",
            "2. Space plants for better air circulation.",
            "3. Avoid overhead irrigation to minimize leaf wetness.",
            "4. Apply fungicides preventively during disease-prone periods.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation protocols in the field.",
            "7. Monitor weather conditions for blight-friendly periods.",
            "8. Educate potato growers on blight recognition.",
            "9. Adjust nitrogen fertilization to avoid excessive growth.",
            "10. Collaborate with experts for blight management."
          ],
          "management": [
            "1. Remove and destroy infected potato plants promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Late Blight pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor tuber quality closely.",
            "8. Develop a Late Blight management plan.",
            "9. Collaborate with neighboring growers to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Potato Late Blight, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Potato-Early-Blight",
          "symptoms": "Potato Early Blight presents as dark, target-like spots on leaves, which gradually turn yellow and cause defoliation. It can reduce yield and quality.",
          "prevention": [
            "1. Choose Early Blight-resistant potato varieties.",
            "2. Rotate crops to reduce pathogen buildup.",
            "3. Space plants for better air circulation.",
            "4. Apply fungicides preventively during disease-prone periods.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation protocols in the field.",
            "7. Adjust nitrogen fertilization for optimal growth.",
            "8. Monitor field conditions and weather for Early Blight risks.",
            "9. Educate potato growers on Early Blight recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and destroy infected potato leaves and plant material.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Early Blight pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor tuber quality closely.",
            "8. Develop an Early Blight management plan.",
            "9. Collaborate with neighboring growers to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Potato Early Blight, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Azoxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Potato-Black-Leg",
          "symptoms": "Potato Black Leg causes wilting and blackening of stems at the base, often with rotting tubers. It can lead to plant death and yield loss.",
          "prevention": [
            "1. Plant certified disease-free seed potatoes.",
            "2. Implement crop rotation with non-host crops.",
            "3. Space plants for better air circulation.",
            "4. Use well-draining soil to prevent waterlogging.",
            "5. Adjust planting depth to avoid burying stem nodes.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols in the field.",
            "8. Monitor plant health and inspect seed potatoes.",
            "9. Educate potato growers on Black Leg recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and destroy infected potato plants promptly.",
            "2. Promote natural antagonists of Black Leg pathogens.",
            "3. Conduct regular field inspections for early detection.",
            "4. Maintain detailed records of disease outbreaks and treatments.",
            "5. Isolate severely affected areas for containment.",
            "6. Monitor tuber quality closely.",
            "7. Develop a Black Leg management plan.",
            "8. Collaborate with neighboring growers to manage the disease collectively.",
            "9. Consider biological control methods.",
            "10. Adjust irrigation practices to prevent stem base wetness."
          ],
          "pesticides": [
            "For effective management of Potato Black Leg, consult with local agricultural experts for suitable treatments or biological control agents. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Potato-Scab",
          "symptoms": "Potato Scab causes rough, scaly patches on tuber surfaces. It can reduce marketability but generally doesn't affect the potato's edibility.",
          "prevention": [
            "1. Plant disease-free seed potatoes.",
            "2. Maintain soil pH around 5.2 to discourage scab development.",
            "3. Use well-rotted compost and organic matter.",
            "4. Rotate crops with non-host plants.",
            "5. Monitor soil moisture levels to avoid excessive dryness.",
            "6. Adjust nitrogen fertilization for balanced growth.",
            "7. Implement strict sanitation protocols in the field.",
            "8. Avoid using manure high in organic matter.",
            "9. Educate potato growers on Scab prevention.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Practice soil management to improve pH levels.",
            "2. Avoid over-irrigation or excessive moisture fluctuations.",
            "3. Remove and discard scab-infested potatoes.",
            "4. Implement crop rotation practices.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Monitor tuber quality and appearance closely.",
            "7. Develop a Scab management plan.",
            "8. Collaborate with neighboring growers to manage the disease collectively.",
            "9. Consider soil amendments for pH adjustment.",
            "10. Adjust nutrient management for pH control."
          ],
          "pesticides": [
            "For effective management of Potato Scab, consult with local agricultural experts for suitable soil amendments or treatments to control soil pH. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Potato-Root-Knot-Nematode",
          "symptoms": "Potato Root-Knot Nematode causes stunted growth, yellowing of leaves, and the formation of galls or knots on roots. It can lead to reduced yield and root damage.",
          "prevention": [
            "1. Use nematode-resistant potato varieties.",
            "2. Practice crop rotation with non-host plants.",
            "3. Implement soil solarization in affected areas.",
            "4. Use certified nematode-free planting material.",
            "5. Monitor soil nematode populations regularly.",
            "6. Adjust irrigation practices to avoid waterlogged soil.",
            "7. Implement strict sanitation protocols in the field.",
            "8. Educate potato growers on nematode recognition.",
            "9. Collaborate with experts for nematode management.",
            "10. Consider biological control agents."
          ],
          "management": [
            "1. Remove and discard severely infected potato plants and tubers.",
            "2. Practice soil solarization in affected areas.",
            "3. Promote beneficial nematodes for biological control.",
            "4. Conduct soil tests to monitor nematode levels.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Implement crop rotation practices.",
            "7. Develop a Root-Knot Nematode management plan.",
            "8. Collaborate with neighboring growers to manage nematodes collectively.",
            "9. Consider nematicides as a last resort, consulting with experts.",
            "10. Adjust irrigation practices for nematode control."
          ],
          "pesticides": [
            "For effective management of Potato Root-Knot Nematode, consult with local agricultural experts for suitable nematode-resistant potato varieties and biological control agents. Consider nematicides only as a last resort and follow recommended guidelines for application and safety."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "tomato",
      "diseases": [
        {
          "name": "Tomato-Septoria-Leaf-Spot",
          "symptoms": "Tomato Septoria Leaf Spot displays as small, dark spots with a lighter center on tomato leaves. These spots can coalesce and lead to defoliation, reducing yield and fruit quality.",
          "prevention": [
            "1. Plant disease-resistant tomato varieties.",
            "2. Space tomato plants for better air circulation.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Water the base of plants to avoid wetting leaves.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation protocols in the garden.",
            "7. Mulch around tomato plants to reduce soil splash.",
            "8. Prune lower branches to increase airflow.",
            "9. Adjust nitrogen fertilization for balanced growth.",
            "10. Rotate tomato crops to reduce pathogen buildup."
          ],
          "management": [
            "1. Remove and destroy infected tomato leaves promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Septoria pathogens.",
            "4. Conduct regular garden inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected plants for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Septoria Leaf Spot management plan.",
            "9. Collaborate with neighboring gardeners to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Tomato Septoria Leaf Spot, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Tomato-Early-Blight",
          "symptoms": "Tomato Early Blight presents as dark, target-like lesions on lower leaves, which gradually spread and cause defoliation. It can reduce yield and fruit quality.",
          "prevention": [
            "1. Plant disease-resistant tomato varieties.",
            "2. Rotate tomato crops to reduce pathogen buildup.",
            "3. Space tomato plants for better air circulation.",
            "4. Apply fungicides preventively during disease-prone periods.",
            "5. Water the base of plants to avoid leaf wetness.",
            "6. Remove and destroy infected plant material.",
            "7. Implement strict sanitation protocols in the garden.",
            "8. Mulch around tomato plants to reduce soil splash.",
            "9. Prune lower branches for increased airflow.",
            "10. Adjust nitrogen fertilization for balanced growth."
          ],
          "management": [
            "1. Remove and destroy infected tomato leaves promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Early Blight pathogens.",
            "4. Conduct regular garden inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected plants for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop an Early Blight management plan.",
            "9. Collaborate with neighboring gardeners to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Tomato Early Blight, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Azoxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Tomato-Late-Blight",
          "symptoms": "Tomato Late Blight causes dark, water-soaked lesions on leaves and stems, often with a white, fuzzy growth on the underside. It leads to rapid defoliation and can rot fruit.",
          "prevention": [
            "1. Plant disease-resistant tomato varieties.",
            "2. Space tomato plants for better air circulation.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Water the base of plants to avoid leaf wetness.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation protocols in the garden.",
            "7. Monitor weather conditions for blight-friendly periods.",
            "8. Adjust nitrogen fertilization to avoid excessive growth.",
            "9. Rotate tomato crops to reduce pathogen buildup.",
            "10. Collaborate with experts for blight management."
          ],
          "management": [
            "1. Remove and destroy infected tomato plants promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Late Blight pathogens.",
            "4. Conduct regular garden inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected plants for containment.",
            "7. Monitor fruit quality closely.",
            "8. Develop a Late Blight management plan.",
            "9. Collaborate with neighboring gardeners to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Tomato Late Blight, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Tomato-Blossom-End-Rot",
          "symptoms": "Tomato Blossom End Rot causes brown, sunken areas at the blossom end of fruit. It results from calcium deficiency and irregular watering.",
          "prevention": [
            "1. Maintain consistent and even watering practices.",
            "2. Adjust soil pH to optimal levels (around 6.5).",
            "3. Apply calcium-containing amendments or sprays.",
            "4. Mulch around tomato plants to maintain soil moisture.",
            "5. Avoid excessive nitrogen fertilization.",
            "6. Space tomato plants adequately for airflow.",
            "7. Monitor soil moisture levels regularly.",
            "8. Implement strict sanitation protocols in the garden.",
            "9. Educate tomato growers on Blossom End Rot prevention.",
            "10. Collaborate with experts for calcium management."
          ],
          "management": [
            "1. Remove affected fruit promptly to prevent further rot.",
            "2. Adjust watering practices to prevent drought stress.",
            "3. Apply calcium-containing sprays as needed.",
            "4. Maintain detailed records of affected fruit.",
            "5. Monitor soil conditions for calcium availability.",
            "6. Isolate severely affected plants for containment.",
            "7. Develop a Blossom End Rot management plan.",
            "8. Collaborate with neighboring gardeners for calcium management.",
            "9. Consider gypsum applications for calcium supplementation.",
            "10. Educate gardeners on proper watering techniques."
          ],
          "pesticides": [
            "There are no specific pesticides for Tomato Blossom End Rot. Focus on prevention measures such as calcium applications and consistent watering practices. Consult with local agricultural experts for guidance."
          ]
        },
        {
          "name": "Tomato-Aphid-Infestation",
          "symptoms": "Tomato Aphid Infestation is characterized by the presence of tiny, soft-bodied insects on the undersides of leaves. They can distort plant growth and transmit diseases.",
          "prevention": [
            "1. Inspect tomato plants regularly for aphids.",
            "2. Use reflective mulch to deter aphids.",
            "3. Introduce natural predators like ladybugs and lacewings.",
            "4. Remove heavily infested leaves or plants.",
            "5. Implement companion planting with aphid-repelling herbs.",
            "6. Apply insecticidal soap or neem oil when necessary.",
            "7. Promote biodiversity in the garden to support natural enemies of aphids.",
            "8. Monitor weather conditions favoring aphid outbreaks.",
            "9. Educate gardeners on aphid recognition.",
            "10. Collaborate with experts for aphid management."
          ],
          "management": [
            "1. Prune affected leaves or use a strong stream of water to dislodge aphids.",
            "2. Release ladybugs or lacewings for biological control.",
            "3. Apply insecticidal soap or neem oil following guidelines.",
            "4. Monitor aphid populations and plant health regularly.",
            "5. Maintain detailed records of infestation levels.",
            "6. Isolate heavily infested plants if possible.",
            "7. Develop an Aphid Infestation management plan.",
            "8. Collaborate with neighboring gardeners to manage aphids collectively.",
            "9. Consider systemic insecticides as a last resort, consulting with experts.",
            "10. Adjust planting schedules to avoid peak aphid activity."
          ],
          "pesticides": [
            "For effective management of Tomato Aphid Infestation, consult with local agricultural experts for suitable insecticides or biological control options. Use systemic insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "onion",
      "diseases": [
        {
          "name": "Onion-Downy-Mildew",
          "symptoms": "Onion Downy Mildew manifests as yellow-green lesions on leaves, often accompanied by purple-black spores on the underside. It causes leaf wilting and reduced bulb quality.",
          "prevention": [
            "1. Plant disease-resistant onion varieties.",
            "2. Space onion plants for better air circulation.",
            "3. Avoid overhead irrigation to minimize leaf wetness.",
            "4. Apply fungicides preventively during disease-prone periods.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation protocols in the field.",
            "7. Adjust nitrogen fertilization for balanced growth.",
            "8. Monitor weather conditions for Downy Mildew risks.",
            "9. Educate onion growers on Downy Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and destroy infected onion leaves promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Downy Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor bulb quality closely.",
            "8. Develop a Downy Mildew management plan.",
            "9. Collaborate with neighboring onion growers to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Onion Downy Mildew, consult with local agricultural experts for suitable fungicides like Metalaxyl or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Onion-White-Rot",
          "symptoms": "Onion White Rot causes white, fluffy fungal growth on onion roots and basal plate. It results in plant wilting, stunted growth, and rotting bulbs.",
          "prevention": [
            "1. Plant disease-resistant onion varieties.",
            "2. Rotate onion crops with non-host plants for several years.",
            "3. Practice good field hygiene to prevent soil contamination.",
            "4. Use disease-free planting material.",
            "5. Adjust planting depth to avoid burying basal plate.",
            "6. Monitor soil moisture levels to prevent waterlogging.",
            "7. Implement strict sanitation protocols in the field.",
            "8. Educate onion growers on White Rot recognition.",
            "9. Collaborate with experts for disease management.",
            "10. Consider biological control agents."
          ],
          "management": [
            "1. Remove and destroy infected onion plants and bulbs promptly.",
            "2. Practice soil solarization in affected areas.",
            "3. Promote beneficial microorganisms for biological control.",
            "4. Conduct soil tests to monitor fungal levels.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor bulb quality and root health closely.",
            "8. Develop a White Rot management plan.",
            "9. Collaborate with neighboring onion growers to manage the disease collectively.",
            "10. Consider soil amendments for fungal suppression."
          ],
          "pesticides": [
            "For effective management of Onion White Rot, consult with local agricultural experts for suitable soil amendments or treatments to control the fungus. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Onion-Smut",
          "symptoms": "Onion Smut appears as black, powdery spore masses on leaves, stems, and bulbs. It causes reduced bulb quality and can affect seed production.",
          "prevention": [
            "1. Plant disease-resistant onion varieties.",
            "2. Use disease-free onion seeds or sets.",
            "3. Rotate onion crops with non-host plants.",
            "4. Practice good field hygiene to prevent spore spread.",
            "5. Monitor and manage humidity levels.",
            "6. Adjust planting depth to avoid burying bulbs too deeply.",
            "7. Implement strict sanitation protocols in the field.",
            "8. Educate onion growers on Smut recognition.",
            "9. Collaborate with experts for disease management.",
            "10. Consider seed treatment."
          ],
          "management": [
            "1. Remove and destroy infected onion plants and bulbs promptly.",
            "2. Practice proper crop rotation to reduce fungal spores.",
            "3. Promote natural antagonists of Smut pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor bulb quality and seed production closely.",
            "8. Develop a Smut management plan.",
            "9. Collaborate with neighboring onion growers to manage the disease collectively.",
            "10. Consider fungicidal seed treatments."
          ],
          "pesticides": [
            "For effective management of Onion Smut, consult with local agricultural experts for suitable seed treatments or fungicides. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Onion-Neck-Rot",
          "symptoms": "Onion Neck Rot causes a soft, watery rot at the neck or stem base of onions. It often leads to lodging and reduced bulb quality during storage.",
          "prevention": [
            "1. Plant well-cured and disease-free onion bulbs.",
            "2. Ensure proper drying and curing of harvested onions.",
            "3. Store onions in a dry, well-ventilated area.",
            "4. Avoid injuring bulbs during harvest or handling.",
            "5. Monitor humidity levels in storage facilities.",
            "6. Implement strict sanitation protocols during harvesting and storage.",
            "7. Educate onion growers on Neck Rot recognition.",
            "8. Collaborate with experts for disease management.",
            "9. Consider post-harvest treatments for prevention.",
            "10. Maintain clean storage containers."
          ],
          "management": [
            "1. Remove and discard affected onions promptly.",
            "2. Improve storage conditions to reduce humidity.",
            "3. Isolate severely affected onions to prevent spread.",
            "4. Conduct regular storage inspections for rot detection.",
            "5. Maintain detailed records of affected batches.",
            "6. Develop an Onion Neck Rot management plan.",
            "7. Collaborate with neighboring onion growers to manage the disease collectively.",
            "8. Consider fungicidal post-harvest treatments.",
            "9. Adjust harvesting techniques to minimize bulb damage.",
            "10. Educate workers on proper handling and storage practices."
          ],
          "pesticides": [
            "For effective management of Onion Neck Rot, consult with local agricultural experts for suitable post-harvest fungicidal treatments. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Onion-Thrips-Infestation",
          "symptoms": "Onion Thrips Infestation results in silvering or stippling of onion leaves due to tiny, rasping insects. Severe infestations can reduce bulb size and quality.",
          "prevention": [
            "1. Inspect onion plants regularly for thrips.",
            "2. Use row covers to protect young plants.",
            "3. Introduce natural predators like minute pirate bugs.",
            "4. Implement reflective mulch to deter thrips.",
            "5. Remove heavily infested leaves or plants.",
            "6. Apply neem oil or insecticidal soap when necessary.",
            "7. Promote biodiversity in the field to support natural enemies of thrips.",
            "8. Monitor weather conditions favoring thrip outbreaks.",
            "9. Educate onion growers on thrip recognition.",
            "10. Collaborate with experts for thrip management."
          ],
          "management": [
            "1. Prune affected leaves or use a strong stream of water to dislodge thrips.",
            "2. Release minute pirate bugs for biological control.",
            "3. Apply neem oil or insecticidal soap following guidelines.",
            "4. Monitor thrip populations and plant health regularly.",
            "5. Maintain detailed records of infestation levels.",
            "6. Isolate heavily infested areas if possible.",
            "7. Develop an Onion Thrips Infestation management plan.",
            "8. Collaborate with neighboring onion growers to manage thrips collectively.",
            "9. Consider insecticide options as a last resort, consulting with experts.",
            "10. Adjust planting schedules to avoid peak thrip activity."
          ],
          "pesticides": [
            "For effective management of Onion Thrips Infestation, consult with local agricultural experts for suitable insecticides or biological control options. Use insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "cauliflower",
      "diseases": [
        {
          "name": "Cauliflower-Black-Rot",
          "symptoms": "Cauliflower Black Rot appears as dark, V-shaped lesions on leaves, eventually causing wilting and death of the plant. It leads to reduced yield and poor-quality heads.",
          "prevention": [
            "1. Plant disease-resistant cauliflower varieties.",
            "2. Rotate cauliflower crops with non-host plants.",
            "3. Use disease-free cauliflower seeds or transplants.",
            "4. Implement strict sanitation in the field.",
            "5. Avoid overhead irrigation to reduce leaf wetness.",
            "6. Space cauliflower plants for better air circulation.",
            "7. Monitor for infected plant debris in the field.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate cauliflower growers on Black Rot recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and destroy infected cauliflower plants promptly.",
            "2. Practice crop rotation to break disease cycles.",
            "3. Promote soil health for disease suppression.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor cauliflower head quality closely.",
            "8. Develop a Black Rot management plan.",
            "9. Collaborate with neighboring cauliflower growers to manage the disease collectively.",
            "10. Consider copper-based fungicides for control."
          ],
          "pesticides": [
            "For effective management of Cauliflower Black Rot, consult with local agricultural experts for suitable copper-based fungicides. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cauliflower-Clubroot",
          "symptoms": "Cauliflower Clubroot causes root swelling, stunting, and yellowing of leaves. Infected plants may have club-shaped roots. It leads to reduced head formation.",
          "prevention": [
            "1. Use clubroot-resistant cauliflower varieties.",
            "2. Practice crop rotation with non-host plants.",
            "3. Improve soil drainage to prevent waterlogged conditions.",
            "4. Adjust soil pH to slightly acidic levels (around 6.5).",
            "5. Use disease-free cauliflower seeds or transplants.",
            "6. Implement strict sanitation in the field.",
            "7. Educate cauliflower growers on Clubroot recognition.",
            "8. Collaborate with experts for disease management.",
            "9. Consider biofungicides for control.",
            "10. Monitor for clubroot-infested soil."
          ],
          "management": [
            "1. Remove and destroy infected cauliflower plants and roots.",
            "2. Improve soil structure and drainage for prevention.",
            "3. Practice crop rotation with non-host plants for several years.",
            "4. Promote beneficial microorganisms for biological control.",
            "5. Conduct soil tests to monitor clubroot levels.",
            "6. Maintain detailed records of disease outbreaks and treatments.",
            "7. Isolate severely affected areas for containment.",
            "8. Develop a Clubroot management plan.",
            "9. Collaborate with neighboring cauliflower growers to manage the disease collectively.",
            "10. Consider soil amendments to adjust pH levels."
          ],
          "pesticides": [
            "For effective management of Cauliflower Clubroot, consult with local agricultural experts for suitable biofungicides or soil amendments. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Cauliflower-White-Rust",
          "symptoms": "Cauliflower White Rust appears as white pustules on leaves and stems. It leads to leaf yellowing, wilting, and reduced head quality.",
          "prevention": [
            "1. Plant disease-resistant cauliflower varieties.",
            "2. Space cauliflower plants for better air circulation.",
            "3. Avoid overhead irrigation to reduce leaf wetness.",
            "4. Apply fungicides preventively during disease-prone periods.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation in the field.",
            "7. Monitor weather conditions for White Rust risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate cauliflower growers on White Rust recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and destroy infected cauliflower leaves and stems promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of White Rust pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Monitor cauliflower head quality closely.",
            "8. Develop a White Rust management plan.",
            "9. Collaborate with neighboring cauliflower growers to manage the disease collectively.",
            "10. Consider organic fungicide options."
          ],
          "pesticides": [
            "For effective management of Cauliflower White Rust, consult with local agricultural experts for suitable fungicides like Mancozeb or Trifloxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Cauliflower-Damping-Off",
          "symptoms": "Cauliflower Damping Off leads to seedling wilting, damping, and decay at the soil line. Seedlings may collapse, affecting stand establishment.",
          "prevention": [
            "1. Use disease-free cauliflower seeds or transplants.",
            "2. Sterilize soil or planting media before sowing.",
            "3. Maintain proper soil drainage to prevent excess moisture.",
            "4. Space cauliflower seedlings adequately for airflow.",
            "5. Avoid overwatering and keep seedlings dry.",
            "6. Implement strict sanitation in the nursery.",
            "7. Use fungicide-treated seeds when necessary.",
            "8. Educate cauliflower growers on Damping Off recognition.",
            "9. Collaborate with experts for disease management.",
            "10. Consider biological control agents."
          ],
          "management": [
            "1. Remove and destroy affected seedlings promptly.",
            "2. Sterilize equipment and containers to prevent further spread.",
            "3. Adjust watering practices to prevent excess moisture.",
            "4. Maintain detailed records of disease outbreaks and treatments.",
            "5. Monitor seedling health closely.",
            "6. Isolate severely affected seedlings for containment.",
            "7. Develop a Damping Off management plan.",
            "8. Collaborate with neighboring cauliflower growers to manage the disease collectively.",
            "9. Consider fungicidal seed treatments.",
            "10. Improve nursery hygiene."
          ],
          "pesticides": [
            "For effective management of Cauliflower Damping Off, consult with local agricultural experts for suitable fungicides or biological control options. Use fungicides on seed treatments when necessary, and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Cauliflower-Aphid-Infestation",
          "symptoms": "Cauliflower Aphid Infestation is characterized by the presence of tiny, soft-bodied insects on the undersides of leaves. They can distort plant growth and transmit diseases.",
          "prevention": [
            "1. Inspect cauliflower plants regularly for aphids.",
            "2. Use reflective mulch to deter aphids.",
            "3. Introduce natural predators like ladybugs and lacewings.",
            "4. Remove heavily infested leaves or plants.",
            "5. Implement companion planting with aphid-repelling herbs.",
            "6. Apply insecticidal soap or neem oil when necessary.",
            "7. Promote biodiversity in the garden to support natural enemies of aphids.",
            "8. Monitor weather conditions favoring aphid outbreaks.",
            "9. Educate cauliflower growers on aphid recognition.",
            "10. Collaborate with experts for aphid management."
          ],
          "management": [
            "1. Prune affected leaves or use a strong stream of water to dislodge aphids.",
            "2. Release ladybugs or lacewings for biological control.",
            "3. Apply insecticidal soap or neem oil following guidelines.",
            "4. Monitor aphid populations and plant health regularly.",
            "5. Maintain detailed records of infestation levels.",
            "6. Isolate heavily infested plants if possible.",
            "7. Develop a Aphid Infestation management plan.",
            "8. Collaborate with neighboring cauliflower growers to manage aphids collectively.",
            "9. Consider systemic insecticides as a last resort, consulting with experts.",
            "10. Adjust planting schedules to avoid peak aphid activity."
          ],
          "pesticides": [
            "For effective management of Cauliflower Aphid Infestation, consult with local agricultural experts for suitable insecticides or biological control options. Use systemic insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "carrot",
      "diseases": [
        {
          "name": "Carrot-Rust-Fly",
          "symptoms": "Carrot Rust Fly infestation results in brown tunnels or galleries inside carrot roots. Affected carrots become disfigured, cracked, and inedible.",
          "prevention": [
            "1. Use floating row covers to prevent adult fly access.",
            "2. Practice crop rotation with non-host plants.",
            "3. Time carrot planting to avoid peak fly activity.",
            "4. Remove and destroy infested plant debris promptly.",
            "5. Monitor for adult flies and egg-laying activity.",
            "6. Implement strict sanitation in the field.",
            "7. Educate carrot growers on Rust Fly recognition.",
            "8. Collaborate with experts for pest management.",
            "9. Consider biological control using parasitic wasps.",
            "10. Use trap crops to divert flies away from carrots."
          ],
          "management": [
            "1. Remove and discard infested carrots and root debris.",
            "2. Practice crop rotation to break pest cycles.",
            "3. Apply nematode treatments if needed.",
            "4. Monitor carrot root health regularly.",
            "5. Maintain detailed records of infestation levels.",
            "6. Isolate heavily affected areas for containment.",
            "7. Develop a Carrot Rust Fly management plan.",
            "8. Collaborate with neighboring carrot growers to manage the pest collectively.",
            "9. Consider soil amendments for nematode control.",
            "10. Adjust planting schedules to avoid peak fly activity."
          ],
          "pesticides": [
            "For effective management of Carrot Rust Fly, consult with local agricultural experts for suitable nematode treatments or insecticides. Follow recommended guidelines for application and safety precautions."
          ]
        },
        {
          "name": "Carrot-Leaf-Spot",
          "symptoms": "Carrot Leaf Spot appears as circular, brown lesions with a dark border on carrot leaves. It can lead to defoliation and reduced yield.",
          "prevention": [
            "1. Choose disease-resistant carrot varieties.",
            "2. Space carrot plants for better air circulation.",
            "3. Avoid overhead irrigation to reduce leaf wetness.",
            "4. Apply fungicides preventively during disease-prone periods.",
            "5. Remove and destroy infected plant material.",
            "6. Implement strict sanitation in the field.",
            "7. Monitor weather conditions for Leaf Spot risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate carrot growers on Leaf Spot recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected carrot leaves promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate heavily affected areas for containment.",
            "7. Develop a Leaf Spot management plan.",
            "8. Collaborate with neighboring carrot growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Carrot Leaf Spot, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Copper-based products. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Carrot-Root-Nematodes",
          "symptoms": "Carrot Root Nematodes cause swollen, deformed, and stunted carrot roots. Affected carrots are often twisted and misshapen.",
          "prevention": [
            "1. Practice crop rotation with non-host plants.",
            "2. Use certified nematode-free carrot seeds.",
            "3. Maintain proper soil drainage to prevent waterlogged conditions.",
            "4. Promote soil health for nematode suppression.",
            "5. Monitor for nematode-infested soil.",
            "6. Educate carrot growers on nematode recognition.",
            "7. Collaborate with experts for nematode management.",
            "8. Consider soil solarization for nematode control.",
            "9. Use nematode-resistant cover crops.",
            "10. Adjust planting schedules to avoid peak nematode activity."
          ],
          "management": [
            "1. Remove and discard infested carrots and root debris.",
            "2. Implement crop rotation with non-host plants for several years.",
            "3. Promote beneficial nematode predators for biological control.",
            "4. Conduct soil tests to monitor nematode levels.",
            "5. Maintain detailed records of nematode infestation.",
            "6. Isolate heavily affected areas for containment.",
            "7. Develop a Carrot Root Nematode management plan.",
            "8. Collaborate with neighboring carrot growers to manage the pest collectively.",
            "9. Consider soil amendments for nematode suppression.",
            "10. Educate workers on nematode control practices."
          ],
          "pesticides": [
            "For effective management of Carrot Root Nematodes, consult with local agricultural experts for suitable nematode treatments or soil amendments. Follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Carrot-Aphid-Infestation",
          "symptoms": "Carrot Aphid Infestation results in curled, distorted, and yellowed carrot leaves. Aphids can transmit plant viruses, affecting carrot health.",
          "prevention": [
            "1. Inspect carrot plants regularly for aphids.",
            "2. Use reflective mulch to deter aphids.",
            "3. Introduce natural predators like ladybugs and lacewings.",
            "4. Remove heavily infested leaves or plants.",
            "5. Implement companion planting with aphid-repelling herbs.",
            "6. Apply insecticidal soap or neem oil when necessary.",
            "7. Promote biodiversity in the garden to support natural enemies of aphids.",
            "8. Monitor weather conditions favoring aphid outbreaks.",
            "9. Educate carrot growers on aphid recognition.",
            "10. Collaborate with experts for aphid management."
          ],
          "management": [
            "1. Prune affected leaves or use a strong stream of water to dislodge aphids.",
            "2. Release ladybugs or lacewings for biological control.",
            "3. Apply insecticidal soap or neem oil following guidelines.",
            "4. Monitor aphid populations and carrot health regularly.",
            "5. Maintain detailed records of infestation levels.",
            "6. Isolate heavily infested plants if possible.",
            "7. Develop a Aphid Infestation management plan.",
            "8. Collaborate with neighboring carrot growers to manage aphids collectively.",
            "9. Consider systemic insecticides as a last resort, consulting with experts.",
            "10. Adjust planting schedules to avoid peak aphid activity."
          ],
          "pesticides": [
            "For effective management of Carrot Aphid Infestation, consult with local agricultural experts for suitable insecticides or biological control options. Use systemic insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Carrot-Powdery-Mildew",
          "symptoms": "Carrot Powdery Mildew appears as white, powdery spots on carrot leaves and stems. It can lead to leaf yellowing, wilting, and reduced root growth.",
          "prevention": [
            "1. Space carrot plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material.",
            "5. Implement strict sanitation in the field.",
            "6. Monitor weather conditions for Powdery Mildew risks.",
            "7. Adjust nitrogen fertilization for balanced growth.",
            "8. Educate carrot growers on Powdery Mildew recognition.",
            "9. Collaborate with experts for disease management.",
            "10. Consider organic fungicide options."
          ],
          "management": [
            "1. Remove and discard infected carrot leaves and stems promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate heavily affected areas for containment.",
            "7. Develop a Powdery Mildew management plan.",
            "8. Collaborate with neighboring carrot growers to manage the disease collectively.",
            "9. Consider organic fungicides or sulfur-based products.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Carrot Powdery Mildew, consult with local agricultural experts for suitable fungicides like Potassium Bicarbonate or Sulfur. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "brinjal",
      "diseases": [
        {
          "name": "Brinjal-Bacterial-Wilt",
          "symptoms": "Brinjal Bacterial Wilt causes wilting, yellowing, and drooping of leaves. Affected plants may show black streaks in the vascular tissue, leading to plant death.",
          "prevention": [
            "1. Use disease-free brinjal seeds or transplants.",
            "2. Practice crop rotation with non-host plants.",
            "3. Implement strict sanitation in the field.",
            "4. Avoid overhead irrigation to reduce leaf wetness.",
            "5. Remove and destroy infected plant material promptly.",
            "6. Use resistant brinjal varieties when available.",
            "7. Educate brinjal growers on Bacterial Wilt recognition.",
            "8. Collaborate with experts for disease management.",
            "9. Consider soil solarization for wilt control.",
            "10. Monitor soil moisture levels to prevent excess water stress."
          ],
          "management": [
            "1. Remove and discard infected brinjal plants promptly.",
            "2. Practice crop rotation with non-host plants for several years.",
            "3. Promote soil health for disease suppression.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Bacterial Wilt management plan.",
            "8. Collaborate with neighboring brinjal growers to manage the disease collectively.",
            "9. Consider copper-based bactericides for control.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Brinjal Bacterial Wilt, consult with local agricultural experts for suitable copper-based bactericides. Follow recommended guidelines for application and safety precautions."
          ]
        },
        {
          "name": "Brinjal-Fruit-and-Shoot-Borer",
          "symptoms": "Brinjal Fruit and Shoot Borer damage is characterized by holes in shoots and fruits, along with frass (excrement) near entry points. It can lead to reduced yield and fruit quality.",
          "prevention": [
            "1. Inspect brinjal plants regularly for borer activity.",
            "2. Remove and destroy affected shoots and infested fruits.",
            "3. Use pheromone traps to monitor and trap adult borers.",
            "4. Implement strict sanitation in the field.",
            "5. Apply neem oil or biopesticides when necessary.",
            "6. Promote beneficial insects like parasitoids.",
            "7. Educate brinjal growers on Borer recognition.",
            "8. Collaborate with experts for pest management.",
            "9. Consider intercropping with trap crops.",
            "10. Monitor temperature and humidity for favorable conditions."
          ],
          "management": [
            "1. Prune and destroy affected shoots and infested fruits.",
            "2. Use pheromone traps for mass trapping of adult borers.",
            "3. Apply neem oil or biopesticides following guidelines.",
            "4. Monitor borer populations and plant health regularly.",
            "5. Maintain detailed records of infestation levels.",
            "6. Isolate heavily affected plants if possible.",
            "7. Develop a Fruit and Shoot Borer management plan.",
            "8. Collaborate with neighboring brinjal growers to manage the pest collectively.",
            "9. Consider chemical insecticides as a last resort, consulting with experts.",
            "10. Adjust planting schedules to minimize borer impact."
          ],
          "pesticides": [
            "For effective management of Brinjal Fruit and Shoot Borer, consult with local agricultural experts for suitable biopesticides or chemical insecticides. Use chemical insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Brinjal-Early-Blight",
          "symptoms": "Brinjal Early Blight presents as dark, concentric rings with a yellow halo on leaves. It can lead to leaf yellowing, defoliation, and reduced fruit production.",
          "prevention": [
            "1. Space brinjal plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant brinjal varieties when available.",
            "7. Monitor weather conditions for Early Blight risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate brinjal growers on Early Blight recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected brinjal leaves promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Early Blight pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop an Early Blight management plan.",
            "8. Collaborate with neighboring brinjal growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Brinjal Early Blight, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Brinjal-Leaf-Curl-Virus",
          "symptoms": "Brinjal Leaf Curl Virus causes curling and yellowing of leaves, stunted growth, and reduced fruit production. Infected plants may exhibit leaf distortion and mosaic patterns.",
          "prevention": [
            "1. Use virus-tested brinjal seeds or transplants.",
            "2. Control whitefly populations through monitoring and trapping.",
            "3. Remove and destroy infected plants promptly.",
            "4. Implement strict sanitation in the field.",
            "5. Apply neem oil or biopesticides to deter whiteflies.",
            "6. Use reflective mulch to repel whiteflies.",
            "7. Collaborate with experts for virus management.",
            "8. Avoid planting near other infected crops.",
            "9. Consider physical barriers like row covers.",
            "10. Educate brinjal growers on Leaf Curl Virus recognition."
          ],
          "management": [
            "1. Remove and discard infected brinjal plants promptly.",
            "2. Monitor whitefly populations and plant health regularly.",
            "3. Apply neem oil or biopesticides following guidelines.",
            "4. Isolate severely affected plants to prevent further spread.",
            "5. Maintain detailed records of virus outbreaks and treatments.",
            "6. Develop a Leaf Curl Virus management plan.",
            "7. Collaborate with neighboring brinjal growers to manage the virus collectively.",
            "8. Consider chemical insecticides as a last resort, consulting with experts.",
            "9. Adjust planting schedules to minimize virus transmission.",
            "10. Rogue out infected plants as soon as symptoms appear."
          ],
          "pesticides": [
            "For effective management of Brinjal Leaf Curl Virus, consult with local agricultural experts for suitable biopesticides or chemical insecticides. Use chemical insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Brinjal-Powdery-Mildew",
          "symptoms": "Brinjal Powdery Mildew appears as white, powdery spots on brinjal leaves, stems, and fruits. It can lead to leaf yellowing, wilting, and reduced fruit quality.",
          "prevention": [
            "1. Space brinjal plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant brinjal varieties when available.",
            "7. Monitor weather conditions for Powdery Mildew risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate brinjal growers on Powdery Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected brinjal leaves, stems, and fruits promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Powdery Mildew management plan.",
            "8. Collaborate with neighboring brinjal growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Brinjal Powdery Mildew, consult with local agricultural experts for suitable fungicides like Potassium Bicarbonate or Sulfur. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "peas",
      "diseases": [
        {
          "name": "Pea-Downy-Mildew",
          "symptoms": "Pea Downy Mildew presents as yellow or brown patches on pea leaves, accompanied by fuzzy gray to purplish growth on the undersides. It can lead to leaf wilting and reduced pod production.",
          "prevention": [
            "1. Space pea plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant pea varieties when available.",
            "7. Monitor weather conditions for Downy Mildew risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate pea growers on Downy Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected pea leaves promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Downy Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Downy Mildew management plan.",
            "8. Collaborate with neighboring pea growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Pea Downy Mildew, consult with local agricultural experts for suitable fungicides like Metalaxyl or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Pea-Powdery-Mildew",
          "symptoms": "Pea Powdery Mildew appears as white, powdery spots on pea leaves and stems. It can lead to leaf yellowing, wilting, and reduced pod quality.",
          "prevention": [
            "1. Space pea plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant pea varieties when available.",
            "7. Monitor weather conditions for Powdery Mildew risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate pea growers on Powdery Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected pea leaves and stems promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Powdery Mildew management plan.",
            "8. Collaborate with neighboring pea growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Pea Powdery Mildew, consult with local agricultural experts for suitable fungicides like Potassium Bicarbonate or Sulfur. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Pea-Root-Rot",
          "symptoms": "Pea Root Rot causes stunted growth, yellowing, and wilting of pea plants. The roots may show dark discoloration, rot, and decay.",
          "prevention": [
            "1. Use disease-free pea seeds or transplants.",
            "2. Practice crop rotation with non-host plants.",
            "3. Implement strict sanitation in the field.",
            "4. Improve soil drainage to prevent waterlogged conditions.",
            "5. Promote soil health for disease suppression.",
            "6. Monitor for soilborne pathogens.",
            "7. Collaborate with experts for Root Rot management.",
            "8. Adjust irrigation practices to prevent excess moisture.",
            "9. Use well-draining containers for container gardening.",
            "10. Educate pea growers on Root Rot recognition."
          ],
          "management": [
            "1. Remove and discard affected pea plants and root debris promptly.",
            "2. Practice crop rotation with non-host plants for several years.",
            "3. Promote beneficial microbes and antagonists for biological control.",
            "4. Conduct soil tests to monitor pathogen levels.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Root Rot management plan.",
            "8. Collaborate with neighboring pea growers to manage the disease collectively.",
            "9. Consider biofungicides or biological control agents.",
            "10. Adjust planting schedules to avoid high-risk periods for Root Rot."
          ],
          "pesticides": [
            "For effective management of Pea Root Rot, consult with local agricultural experts for suitable biofungicides or chemical treatments. Use chemical treatments cautiously and follow recommended guidelines for application and safety precautions."
          ]
        },
        {
          "name": "Pea-Aphid-Infestation",
          "symptoms": "Pea Aphid Infestation is characterized by clusters of small, soft-bodied insects on pea plants. They feed on plant sap, causing yellowing, curling leaves, and reduced pea yields.",
          "prevention": [
            "1. Inspect pea plants regularly for aphid colonies.",
            "2. Release natural predators like ladybugs and lacewings.",
            "3. Use reflective mulch to deter aphids.",
            "4. Promote intercropping with companion plants that repel aphids.",
            "5. Implement strict sanitation in the field.",
            "6. Monitor weather conditions for aphid risks.",
            "7. Adjust nitrogen fertilization for balanced plant growth.",
            "8. Collaborate with experts for aphid management.",
            "9. Consider using neem oil or insecticidal soaps.",
            "10. Educate pea growers on Aphid recognition."
          ],
          "management": [
            "1. Prune and discard heavily infested plant parts.",
            "2. Apply neem oil or insecticidal soaps following guidelines.",
            "3. Monitor aphid populations and pea health regularly.",
            "4. Maintain detailed records of infestation levels.",
            "5. Isolate heavily infested pea plants if possible.",
            "6. Develop a Aphid Infestation management plan.",
            "7. Collaborate with neighboring pea growers to manage aphids collectively.",
            "8. Consider systemic insecticides as a last resort, consulting with experts.",
            "9. Adjust planting schedules to avoid peak aphid activity.",
            "10. Use yellow sticky traps for monitoring and control."
          ],
          "pesticides": [
            "For effective management of Pea Aphid Infestation, consult with local agricultural experts for suitable insecticides or biological control options. Use systemic insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Pea-Pea-Mosaic-Virus",
          "symptoms": "Pea Pea Mosaic Virus causes mottled, mosaic-like patterns on pea leaves. Infected plants may exhibit stunted growth, leaf distortion, and reduced pod development.",
          "prevention": [
            "1. Use virus-tested pea seeds or transplants.",
            "2. Control aphid populations through monitoring and trapping.",
            "3. Remove and destroy infected plants promptly.",
            "4. Implement strict sanitation in the field.",
            "5. Apply neem oil or biopesticides to deter aphids.",
            "6. Use reflective mulch to repel aphids.",
            "7. Collaborate with experts for virus management.",
            "8. Avoid planting near other infected crops.",
            "9. Consider physical barriers like row covers.",
            "10. Educate pea growers on Mosaic Virus recognition."
          ],
          "management": [
            "1. Remove and discard infected pea plants promptly.",
            "2. Monitor aphid populations and pea health regularly.",
            "3. Apply neem oil or biopesticides following guidelines.",
            "4. Isolate severely affected plants to prevent further spread.",
            "5. Maintain detailed records of virus outbreaks and treatments.",
            "6. Develop a Pea Mosaic Virus management plan.",
            "7. Collaborate with neighboring pea growers to manage the virus collectively.",
            "8. Consider chemical insecticides as a last resort, consulting with experts.",
            "9. Adjust planting schedules to minimize virus transmission.",
            "10. Rogue out infected plants as soon as symptoms appear."
          ],
          "pesticides": [
            "For effective management of Pea Pea Mosaic Virus, consult with local agricultural experts for suitable biopesticides or chemical insecticides. Use chemical insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "okra",
      "diseases": [
        {
          "name": "Okra-Yellow-Mosaic-Virus",
          "symptoms": "Okra Yellow Mosaic Virus causes mottled yellowing and mosaic-like patterns on okra leaves. Infected plants may exhibit stunted growth, leaf distortion, and reduced pod development.",
          "prevention": [
            "1. Use virus-tested okra seeds or transplants.",
            "2. Control aphid populations through monitoring and trapping.",
            "3. Remove and destroy infected plants promptly.",
            "4. Implement strict sanitation in the field.",
            "5. Apply neem oil or biopesticides to deter aphids.",
            "6. Use reflective mulch to repel aphids.",
            "7. Collaborate with experts for virus management.",
            "8. Avoid planting near other infected crops.",
            "9. Consider physical barriers like row covers.",
            "10. Educate okra growers on Mosaic Virus recognition."
          ],
          "management": [
            "1. Remove and discard infected okra plants promptly.",
            "2. Monitor aphid populations and okra health regularly.",
            "3. Apply neem oil or biopesticides following guidelines.",
            "4. Isolate severely affected plants to prevent further spread.",
            "5. Maintain detailed records of virus outbreaks and treatments.",
            "6. Develop an Okra Yellow Mosaic Virus management plan.",
            "7. Collaborate with neighboring okra growers to manage the virus collectively.",
            "8. Consider chemical insecticides as a last resort, consulting with experts.",
            "9. Adjust planting schedules to minimize virus transmission.",
            "10. Rogue out infected plants as soon as symptoms appear."
          ],
          "pesticides": [
            "For effective management of Okra Yellow Mosaic Virus, consult with local agricultural experts for suitable biopesticides or chemical insecticides. Use chemical insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Okra-Powdery-Mildew",
          "symptoms": "Okra Powdery Mildew appears as white, powdery spots on okra leaves and stems. It can lead to leaf yellowing, wilting, and reduced pod quality.",
          "prevention": [
            "1. Space okra plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant okra varieties when available.",
            "7. Monitor weather conditions for Powdery Mildew risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate okra growers on Powdery Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected okra leaves and stems promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop an Okra Powdery Mildew management plan.",
            "8. Collaborate with neighboring okra growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Okra Powdery Mildew, consult with local agricultural experts for suitable fungicides like Potassium Bicarbonate or Sulfur. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Okra-Leaf-Spot",
          "symptoms": "Okra Leaf Spot presents as small, dark spots with yellow halos on okra leaves. It can lead to leaf yellowing, defoliation, and reduced fruit production.",
          "prevention": [
            "1. Space okra plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides during wet periods as a preventive measure.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant okra varieties when available.",
            "7. Monitor weather conditions for Leaf Spot risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate okra growers on Leaf Spot recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected okra leaves promptly.",
            "2. Apply fungicides as directed by experts during disease outbreaks.",
            "3. Promote natural antagonists of Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop an Okra Leaf Spot management plan.",
            "8. Collaborate with neighboring okra growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Okra Leaf Spot, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Okra-Rust",
          "symptoms": "Okra Rust appears as rusty orange to brown pustules on the undersides of okra leaves. It can lead to leaf yellowing, wilting, and reduced pod quality.",
          "prevention": [
            "1. Space okra plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant okra varieties when available.",
            "7. Monitor weather conditions for Rust risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate okra growers on Rust recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected okra leaves and stems promptly.",
            "2. Apply fungicides as directed by experts.",
            "3. Promote natural antagonists of Rust pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop an Okra Rust management plan.",
            "8. Collaborate with neighboring okra growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Okra Rust, consult with local agricultural experts for suitable fungicides like Propiconazole or Tebuconazole. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Okra-Root-Knot-Nematode",
          "symptoms": "Okra Root Knot Nematode infestation causes stunted growth, yellowing, and wilting of okra plants. The roots may develop swollen, knotty galls.",
          "prevention": [
            "1. Use nematode-resistant okra varieties when available.",
            "2. Practice crop rotation with non-host plants.",
            "3. Implement strict sanitation in the field.",
            "4. Use beneficial nematode antagonists for biological control.",
            "5. Promote soil health for nematode suppression.",
            "6. Monitor for nematode populations in the soil.",
            "7. Collaborate with experts for Nematode management.",
            "8. Adjust irrigation practices to prevent excess moisture.",
            "9. Use well-draining containers for container gardening.",
            "10. Educate okra growers on Nematode recognition."
          ],
          "management": [
            "1. Remove and discard affected okra plants and root galls promptly.",
            "2. Practice crop rotation with non-host plants for several years.",
            "3. Promote beneficial nematodes and antagonists for biological control.",
            "4. Conduct soil tests to monitor nematode levels.",
            "5. Maintain detailed records of nematode infestations and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop an Okra Root Knot Nematode management plan.",
            "8. Collaborate with neighboring okra growers to manage nematodes collectively.",
            "9. Consider biopesticides or biological control agents.",
            "10. Adjust planting schedules to avoid high-risk periods for nematodes."
          ],
          "pesticides": [
            "For effective management of Okra Root Knot Nematode, consult with local agricultural experts for suitable biopesticides or chemical treatments. Use chemical treatments cautiously and follow recommended guidelines for application and safety precautions."
          ]
        }
      ]
    },
    {
      "type": "vegetable-crop",
      "name": "bitter-gourd",
      "diseases": [
        {
          "name": "Bitter-Gourd-Yellow-Mosaic-Virus",
          "symptoms": "Bitter Gourd Yellow Mosaic Virus causes mottled yellowing and mosaic-like patterns on bitter gourd leaves. Infected plants may exhibit stunted growth, leaf distortion, and reduced fruit production.",
          "prevention": [
            "1. Use virus-tested bitter gourd seeds or transplants.",
            "2. Control aphid populations through monitoring and trapping.",
            "3. Remove and destroy infected plants promptly.",
            "4. Implement strict sanitation in the field.",
            "5. Apply neem oil or biopesticides to deter aphids.",
            "6. Use reflective mulch to repel aphids.",
            "7. Collaborate with experts for virus management.",
            "8. Avoid planting near other infected crops.",
            "9. Consider physical barriers like row covers.",
            "10. Educate bitter gourd growers on Mosaic Virus recognition."
          ],
          "management": [
            "1. Remove and discard infected bitter gourd plants promptly.",
            "2. Monitor aphid populations and plant health regularly.",
            "3. Apply neem oil or biopesticides following guidelines.",
            "4. Isolate severely affected plants to prevent further spread.",
            "5. Maintain detailed records of virus outbreaks and treatments.",
            "6. Develop a Bitter Gourd Yellow Mosaic Virus management plan.",
            "7. Collaborate with neighboring growers to manage the virus collectively.",
            "8. Consider chemical insecticides as a last resort, consulting with experts.",
            "9. Adjust planting schedules to minimize virus transmission.",
            "10. Rogue out infected plants as soon as symptoms appear."
          ],
          "pesticides": [
            "For effective management of Bitter Gourd Yellow Mosaic Virus, consult with local agricultural experts for suitable biopesticides or chemical insecticides. Use chemical insecticides only as a last resort and follow recommended guidelines for application and safety."
          ]
        },
        {
          "name": "Bitter-Gourd-Powdery-Mildew",
          "symptoms": "Bitter Gourd Powdery Mildew appears as white, powdery spots on leaves and stems. It can lead to leaf yellowing, wilting, and reduced fruit quality.",
          "prevention": [
            "1. Space plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides preventively during disease-prone periods.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant bitter gourd varieties when available.",
            "7. Monitor weather conditions for Powdery Mildew risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate growers on Powdery Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected leaves and stems promptly.",
            "2. Apply fungicides as directed by experts during outbreaks.",
            "3. Promote natural antagonists of Powdery Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Bitter Gourd Powdery Mildew management plan.",
            "8. Collaborate with neighboring growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Bitter Gourd Powdery Mildew, consult with local agricultural experts for suitable fungicides like Potassium Bicarbonate or Sulfur. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Bitter-Gourd-Anthracnose",
          "symptoms": "Bitter Gourd Anthracnose leads to circular, sunken lesions on fruit and leaves, often with dark, concentric rings. Infected fruits become discolored and may ooze pinkish spore masses.",
          "prevention": [
            "1. Space plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides during wet periods as a preventive measure.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant bitter gourd varieties when available.",
            "7. Monitor weather conditions for Anthracnose risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate growers on Anthracnose recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected leaves, fruit, and plant material promptly.",
            "2. Apply fungicides as directed by experts during outbreaks.",
            "3. Promote natural antagonists of Anthracnose pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Bitter Gourd Anthracnose management plan.",
            "8. Collaborate with neighboring growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Bitter Gourd Anthracnose, consult with local agricultural experts for suitable fungicides like Chlorothalonil or Mancozeb. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Bitter-Gourd-Leaf-Spot",
          "symptoms": "Bitter Gourd Leaf Spot causes small, dark spots with yellow halos on leaves. It can lead to leaf yellowing, defoliation, and reduced fruit production.",
          "prevention": [
            "1. Space plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides during wet periods as a preventive measure.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant bitter gourd varieties when available.",
            "7. Monitor weather conditions for Leaf Spot risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate growers on Leaf Spot recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected leaves promptly.",
            "2. Apply fungicides as directed by experts during outbreaks.",
            "3. Promote natural antagonists of Leaf Spot pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Bitter Gourd Leaf Spot management plan.",
            "8. Collaborate with neighboring growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Bitter Gourd Leaf Spot, consult with local agricultural experts for suitable fungicides like Copper-based products or Azoxystrobin. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        },
        {
          "name": "Bitter-Gourd-Downy-Mildew",
          "symptoms": "Bitter Gourd Downy Mildew appears as yellow, angular spots on upper leaf surfaces, with grayish-purple spore growth on the undersides. It can lead to leaf yellowing, defoliation, and reduced fruit quality.",
          "prevention": [
            "1. Space plants for better air circulation.",
            "2. Avoid overhead irrigation to reduce leaf wetness.",
            "3. Apply fungicides during wet periods as a preventive measure.",
            "4. Remove and destroy infected plant material promptly.",
            "5. Implement strict sanitation in the field.",
            "6. Use disease-resistant bitter gourd varieties when available.",
            "7. Monitor weather conditions for Downy Mildew risks.",
            "8. Adjust nitrogen fertilization for balanced growth.",
            "9. Educate growers on Downy Mildew recognition.",
            "10. Collaborate with experts for disease management."
          ],
          "management": [
            "1. Remove and discard infected leaves promptly.",
            "2. Apply fungicides as directed by experts during outbreaks.",
            "3. Promote natural antagonists of Downy Mildew pathogens.",
            "4. Conduct regular field inspections for early detection.",
            "5. Maintain detailed records of disease outbreaks and treatments.",
            "6. Isolate severely affected areas for containment.",
            "7. Develop a Bitter Gourd Downy Mildew management plan.",
            "8. Collaborate with neighboring growers to manage the disease collectively.",
            "9. Consider organic fungicide options.",
            "10. Adjust planting schedules to avoid peak disease pressure."
          ],
          "pesticides": [
            "For effective management of Bitter Gourd Downy Mildew, consult with local agricultural experts for suitable fungicides like Metalaxyl or Cymoxanil. Follow the manufacturer's guidelines for precise application, dosage, and safety precautions."
          ]
        }
      ]
    }
      // Add more vegetable crops with disease info
    ];
    
  
