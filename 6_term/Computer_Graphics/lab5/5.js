let colorLengthInput = document.getElementById("length");
let btnColorLength = document.getElementById("btn_color_length");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let fileInput = document.getElementById("btn");
let btnSize = document.getElementById("btn_size");
let inpWidth = document.getElementById("inp_width");
let usedDmcColorsIndex = {};

let dmcColorList = [
  ["Ecru", "Ecru", 240, 234, 218, "卡", 0],
  ["B5200", "Snow White", 255, 255, 255, ".", 0],
  ["White", "White", 252, 251, 248, "yu", 0],
  [150, "Dusty Rose Ult Vy Dk", 171, 2, 73, "佩", 0],
  [151, "Dusty Rose Vry Lt", 240, 206, 212, "泰", 0],
  [152, "Shell Pink Med Light", 226, 160, 153, "吴", 0],
  [153, "Violet Very Light", 230, 204, 217, "哈", 0],
  [154, "Grape Very Dark", 87, 36, 51, "册", 0],
  [155, "Blue Violet Med Dark", 152, 145, 182, "俄", 0],
  [156, "Blue Violet Med Lt", 163, 174, 209, "☉", 0],
  [157, "Cornflower Blue Vy Lt", 187, 195, 217, "☽", 0],
  [158, "Cornflower Blu M V D", 76, 82, 110, "♪", 0],
  [159, "Blue Gray Light", 199, 202, 215, "✈", 0],
  [160, "Blue Gray Medium", 153, 159, 183, "✠", 0],
  [161, "Blue Gray", 120, 128, 164, "✡", 0],
  [162, "Blue Ultra Very Light", 219, 236, 245, "::", 0],
  [163, "Celadon Green Md", 77, 131, 97, "✮", 0],
  [164, "Forest Green Lt", 200, 216, 184, "✹", 0],
  [165, "Moss Green Vy Lt", 239, 244, 164, "✿", 0],
  [166, "Moss Green Md Lt", 192, 200, 64, "❄", 0],
  [167, "Yellow Beige V Dk", 167, 124, 73, "❣", 0],
  [168, "Pewter Very Light", 209, 209, 209, "❤", 0],
  [169, "Pewter Light", 132, 132, 132, "❥", 0],
  [208, "Lavender Very Dark", 131, 91, 139, "▲", 0],
  [209, "Lavender Dark", 163, 123, 167, "▶", 0],
  [210, "Lavender Medium", 195, 159, 195, "◀", 0],
  [211, "Lavender Light", 227, 203, 227, "●", 0],
  [221, "Shell Pink Vy Dk", 136, 62, 67, "♔", 0],
  [223, "Shell Pink Light", 204, 132, 124, "♕", 0],
  [224, "Shell Pink Very Light", 235, 183, 17, "♖", 0],
  [225, "Shell Pink Ult Vy Lt", 255, 223, 213, "♘", 0],
  [300, "Mahogany Vy Dk", 111, 47, 0, "♟", 0],
  [301, "Mahogany Med", 179, 95, 43, "♩", 0],
  [304, "Red Medium", 183, 31, 51, "♫", 0],
  [307, "Lemon", 253, 237, 84, "♯", 0],
  [309, "Rose Dark", 86, 74, 74, "𝄞", 0],
  [310, "Black", 0, 0, 0, "ㅓ", 0],
  [311, "Wedgewood Ult VyDk", 28, 80, 102, "ϟ", 0],
  [312, "Baby Blue Very Dark", 53, 102, 139, "☾", 0],
  [315, "Antique Mauve Md Dk", 129, 73, 82, "☼", 0],
  [316, "Antique Mauve Med", 183, 115, 127, "𖣔", 0],
  [317, "Pewter Gray", 108, 108, 108, "༄", 0],
  [318, "Steel Gray Lt", 171, 171, 171, "♨", 0],
  [319, "Pistachio Grn Vy Dk", 32, 95, 46, "♁", 0],
  [320, "Pistachio Green Med", 105, 136, 90, "☉", 0],
  [321, "Red", 199, 43, 59, "☄", 0],
  [322, "Baby Blue Dark", 90, 143, 184, "©︎", 0],
  [326, "Rose Very Dark", 179, 59, 75, "℗", 0],
  [327, "Violet Dark", 99, 54, 102, "☏", 0],
  [333, "Blue Violet Very Dark", 92, 84, 120, "✂", 0],
  [334, "Baby Blue Medium", 115, 159, 193, "✆", 0],
  [335, "Rose", 238, 84, 110, "✉", 0],
  [336, "Navy Blue", 37, 59, 115, "✎", 0],
  [340, "Blue Violet Medium", 173, 167, 199, "✇", 0],
  [341, "Blue Violet Light", 183, 191, 221, "𓍝", 0],
  [347, "Salmon Very Dark", 191, 45, 45, "⚐", 0],
  [349, "Coral Dark", 210, 16, 53, "⚗", 0],
  [350, "Coral Medium", 224, 72, 72, "⚿", 0],
  [351, "Coral", 233, 106, 103, "⛟", 0],
  [352, "Coral Light", 253, 156, 151, "⛨", 0],
  [353, "Peach", 254, 215, 204, "⛾", 0],
  [355, "Terra Cotta Dark", 152, 68, 54, "☺", 0],
  [356, "Terra Cotta Med", 197, 106, 91, "☘", 0],
  [367, "Pistachio Green Dk", 97, 122, 82, "♠", 0],
  [368, "Pistachio Green Lt", 166, 194, 152, "♦", 0],
  [369, "Pistachio Green Vy Lt", 215, 237, 204, "♣", 0],
  [370, "Mustard Medium", 184, 157, 100, "☹", 0],
  [371, "Mustard", 191, 166, 113, "⛱", 0],
  [372, "Mustard Lt", 204, 183, 132, "☯", 0],
  [400, "Mahogany Dark", 143, 67, 15, "⛏", 0],
  [402, "Mahogany Vy Lt", 247, 167, 119, "⏱", 0],
  [407, "Desert Sand Med", 187, 129, 97, "⚜︎", 0],
  [413, "Pewter Gray Dark", 86, 86, 86, "☑", 0],
  [414, "Steel Gray Dk", 140, 140, 140, "⛓︎", 0],
  [415, "Pearl Gray", 211, 211, 214, "$$", 0],
  [420, "Hazelnut Brown Dk", 160, 112, 66, "♻", 0],
  [422, "Hazelnut Brown Lt", 198, 159, 123, "≣", 0],
  [433, "Brown Med", 122, 69, 31, "㊂", 0],
  [434, "Brown Light", 152, 94, 51, "Э", 0],
  [435, "Brown Very Light", 184, 119, 72, "Ъ", 0],
  [436, "Tan", 203, 144, 81, "Ю", 0],
  [437, "Tan Light", 228, 187, 142, "Ь", 0],
  [444, "Lemon Dark", 255, 214, 0, "Т", 0],
  [445, "Lemon Light", 255, 251, 139, "Ч", 0],
  [451, "Shell Gray Dark", 145, 123, 115, "Ц", 0],
  [452, "Shell Gray Med", 192, 179, 174, "Г", 0],
  [453, "Shell Gray Light", 215, 206, 203, "CC", 0],
  [469, "Avocado Green", 114, 132, 60, "CO", 0],
  [470, "Avocado Grn Lt", 148, 171, 79, "AA", 0],
  [471, "Avocado Grn V Lt", 174, 191, 121, "✔", 0],
  [472, "Avocado Grn U Lt", 216, 228, 152, "✖", 0],
  [498, "Red Dark", 167, 19, 43, "☪", 0],
  [500, "Blue Green Vy Dk", 4, 77, 51, "ㅗ", 0],
  [501, "Blue Green Dark", 57, 111, 82, "ㅕ", 0],
  [502, "Blue Green", 91, 144, 113, "Ж", 0],
  [503, "Blue Green Med", 123, 172, 148, "К", 0],
  [504, "Blue Green Vy Lt", 196, 222, 204, "⛑", 0],
  [505, "Jade Green", 51, 131, 98, "‼", 0],
  [517, "Wedgewood Dark", 59, 118, 143, "Ⓜ", 0],
  [518, "Wedgewood Light", 79, 147, 167, "⏮", 0],
  [519, "Sky Blue", 126, 177, 200, "@", 0],
  [520, "Fern Green Dark", 102, 109, 79, "⏺", 0],
  [522, "Fern Green", 150, 158, 126, "Д", 0],
  [523, "Fern Green Lt", 171, 177, 151, "Я", 0],
  [524, "Fern Green Vy Lt", 196, 205, 172, "6%", 0],
  [535, "Ash Gray Vy Lt", 99, 100, 88, "++", 0],
  [543, "Beige Brown Ult Vy Lt", 242, 227, 206, "♾︎", 0],
  [550, "Violet Very Dark", 92, 24, 78, "🂠", 0],
  [552, "Violet Medium", 128, 58, 107, "🂡", 0],
  [553, "Violet", 163, 99, 139, "🂢", 0],
  [554, "Violet Light", 219, 179, 203, "🂣", 0],
  [561, "Celadon Green VD", 44, 106, 69, "🂤", 0],
  [562, "Jade Medium", 83, 151, 106, "🂥", 0],
  [563, "Jade Light", 143, 192, 152, "🂦", 0],
  [564, "Jade Very Light", 167, 205, 175, "🂧", 0],
  [580, "Moss Green Dk", 136, 141, 51, "э", 0],
  [581, "Moss Green", 167, 174, 56, "ж", 0],
  [597, "Turquoise", 91, 163, 179, "∛", 0],
  [598, "Turquoise Light", 144, 195, 204, "☑", 0],
  [600, "Cranberry Very Dark", 205, 47, 99, "☒", 0],
  [601, "Cranberry Dark", 209, 40, 106, "⚀", 0],
  [602, "Cranberry Medium", 226, 72, 116, "⚁", 0],
  [603, "Cranberry", 255, 164, 190, "⚂", 0],
  [604, "Cranberry Light", 255, 176, 190, "⚃", 0],
  [605, "Cranberry Very Light", 255, 192, 205, "⚄", 0],
  [606, "Orange-Red Bright", 250, 50, 3, "⚅", 0],
  [608, "Burnt Orange Bright", 253, 93, 53, "㋡", 0],
  [610, "Drab Brown Dk", 121, 96, 71, "⚉", 0],
  [611, "Drab Brown", 150, 118, 86, "ㅜ", 0],
  [612, "Drab Brown Lt", 188, 154, 120, "⍨", 0],
  [613, "Drab Brown V Lt", 220, 196, 170, "ㅛ", 0],
  [632, "Desert Sand Ult Vy Dk", 135, 85, 57, "𖠋", 0],
  [640, "Beige Gray Vy Dk", 133, 123, 97, "𖨆", 0],
  [642, "Beige Gray Dark", 164, 152, 120, "웃", 0],
  [644, "Beige Gray Med", 221, 216, 203, "유", 0],
  [645, "Beaver Gray Vy Dk", 110, 101, 92, "𖧀", 0],
  [646, "Beaver Gray Dk", 135, 125, 115, "ⶆ", 0],
  [647, "Beaver Gray Med", 176, 166, 156, "𖦔", 0],
  [648, "Beaver Gray Lt", 188, 180, 172, "𖤾", 0],
  [666, "Bright Red", 227, 29, 66, "𖦯", 0],
  [676, "Old Gold Lt", 229, 206, 151, "𖥶", 0],
  [677, "Old Gold Vy Lt", 245, 236, 203, "ඩ", 0],
  [680, "Old Gold Dark", 188, 141, 14, "⍢", 0],
  [699, "Green", 5, 101, 23, "ㅠ", 0],
  [700, "Green Bright", 7, 115, 27, "ヅ", 0],
  [701, "Green Light", 63, 143, 41, "쓰", 0],
  [702, "Kelly Green", 71, 167, 47, "ت", 0],
  [703, "Chartreuse", 123, 181, 71, "𓂀", 0],
  [704, "Chartreuse Bright", 158, 207, 52, "ㅣ", 0],
  [712, "Cream", 255, 251, 239, "ㅡ", 0],
  [718, "Plum", 156, 36, 98, "𓎱", 0],
  [720, "Orange Spice Dark", 229, 92, 31, "𓁿", 0],
  [721, "Orange Spice Med", 242, 120, 66, "𓀞", 0],
  [722, "Orange Spice Light", 247, 151, 111, "ㅐ", 0],
  [725, "Topaz Med Lt", 255, 200, 64, "𓁏", 0],
  [726, "Topaz Light", 253, 215, 85, "𓀹", 0],
  [727, "Topaz Vy Lt", 255, 241, 175, "𓀼", 0],
  [728, "Topaz", 228, 180, 104, "𓁉", 0],
  [729, "Old Gold Medium", 208, 165, 62, "➉", 0],
  [730, "Olive Green V Dk", 130, 123, 48, "➈", 0],
  [731, "Olive Green Dk", 147, 139, 55, "➇", 0],
  [732, "Olive Green", 148, 140, 54, "➆", 0],
  [733, "Olive Green Md", 188, 179, 76, "➅", 0],
  [734, "Olive Green Lt", 199, 192, 119, "➄", 0],
  [738, "Tan Very Light", 236, 204, 158, "➃", 0],
  [739, "Tan Ult Vy Lt", 248, 228, 200, "➂", 0],
  [740, "Tangerine", 255, 139, 0, "➋", 0],
  [741, "Tangerine Med", 255, 163, 43, "➊", 0],
  [742, "Tangerine Light", 255, 191, 87, "$", 0],
  [743, "Yellow Med", 254, 211, 118, "%", 0],
  [744, "Yellow Pale", 255, 231, 147, "&", 0],
  [745, "Yellow Pale Light", 255, 233, 173, "*", 0],
  [746, "Off White", 252, 252, 238, "@", 0],
  [747, "Peacock Blue Vy Lt", 229, 252, 253, "§", 0],
  [754, "Peach Light", 247, 203, 191, "¶", 0],
  [758, "Terra Cotta Vy Lt", 238, 170, 155, "※", 0],
  [760, "Salmon", 245, 173, 173, "⁋", 0],
  [761, "Salmon Light", 255, 201, 201, "⚤", 0],
  [762, "Pearl Gray Vy Lt", 236, 236, 236, "**", 0],
  [772, "Yellow Green Vy Lt", 228, 236, 212, "☚", 0],
  [775, "Baby Blue Very Light", 217, 235, 241, "☛", 0],
  [776, "Pink Medium", 252, 176, 185, "W", 0],
  [777, "Raspberry Very Dark", 145, 53, 70, "☟", 0],
  [778, "Antique Mauve Vy Lt", 223, 179, 187, "☭", 0],
  [779, "Cocoa Dark", 98, 75, 69, "☬", 0],
  [780, "Topaz Ultra Vy Dk", 148, 99, 26, "☫", 0],
  [781, "Topaz Very Dark", 162, 109, 32, "☤", 0],
  [782, "Topaz Dark", 174, 119, 32, "⚚", 0],
  [783, "Topaz Medium", 206, 145, 36, "𖢅", 0],
  [791, "Cornflower Blue V D", 70, 69, 99, "&", 0],
  [792, "Cornflower Blue Dark", 85, 91, 123, "*", 0],
  [793, "Cornflower Blue Med", 112, 125, 162, "??", 0],
  [794, "Cornflower Blue Light", 143, 156, 193, "?", 0],
  [796, "Royal Blue Dark", 17, 65, 109, "\\", 0],
  [797, "Royal Blue", 19, 71, 125, "/", 0],
  [798, "Delft Blue Dark", 70, 106, 142, "1M", 0],
  [799, "Delft Blue Medium", 116, 142, 182, "776", 0],
  [801, "Coffee Brown Dk", 101, 57, 25, "ㅏ", 0],
  [803, "Baby Blue Ult Vy Dk", 44, 89, 124, "ㅙ", 0],
  [806, "Peacock Blue Dark", 61, 149, 165, "ㅚ", 0],
  [807, "Peacock Blue", 100, 171, 186, "ㅘ", 0],
  [809, "Delft Blue", 148, 168, 198, "ㅖ", 0],
  [813, "Blue Light", 161, 194, 215, "ㅔ", 0],
  [814, "Garnet Dark", 123, 0, 27, "ㅒ", 0],
  [815, "Garnet Medium", 135, 7, 31, "ㅝ", 0],
  [816, "Garnet", 151, 11, 35, "ㅞ", 0],
  [817, "Coral Red Very Dark", 187, 5, 31, "ㅟ", 0],
  [818, "Baby Pink", 255, 223, 217, "ㄴ", 0],
  [819, "Baby Pink Light", 255, 238, 235, "ㅢ", 0],
  [820, "Royal Blue Very Dark", 14, 54, 92, "ㄱ", 0],
  [822, "Beige Gray Light", 231, 226, 211, "𒑱", 0],
  [823, "Navy Blue Dark", 33, 48, 99, "𒇹", 0],
  [824, "Blue Very Dark", 57, 105, 135, "𒌋", 0],
  [825, "Blue Dark", 71, 129, 165, "𒆳", 0],
  [826, "Blue Medium", 107, 158, 191, "6", 0],
  [827, "Blue Very Light", 189, 221, 237, "5", 0],
  [828, "Sky Blue Vy Lt", 197, 232, 237, "ㄷ", 0],
  [829, "Golden Olive Vy Dk", 126, 107, 66, "⋱", 0],
  [830, "Golden Olive Dk", 141, 120, 75, "༜", 0],
  [831, "Golden Olive Md", 170, 143, 86, "⩩", 0],
  [832, "Golden Olive", 189, 155, 81, "ㄹ", 0],
  [833, "Golden Olive Lt", 200, 171, 108, "ㅁ", 0],
  [834, "Golden Olive Vy Lt", 219, 190, 127, "4", 0],
  [838, "Beige Brown Vy Dk", 89, 73, 55, "3", 0],
  [839, "Beige Brown Dk", 103, 85, 65, "2", 0],
  [840, "Beige Brown Med", 154, 124, 92, "𖤝", 0],
  [841, "Beige Brown Lt", 182, 155, 126, "1", 0],
  [842, "Beige Brown Vy Lt", 209, 186, 161, "9", 0],
  [844, "Beaver Gray Ult Dk", 72, 72, 72, "Q", 0],
  [869, "Hazelnut Brown V Dk", 131, 94, 57, "W", 0],
  [890, "Pistachio Grn Ult V D", 23, 73, 35, "E", 0],
  [891, "Carnation Dark", 255, 87, 115, "R", 0],
  [892, "Carnation Medium", 255, 121, 140, "T", 0],
  [893, "Carnation Light", 252, 144, 162, "Y", 0],
  [894, "Carnation Very Light", 255, 178, 187, "U", 0],
  [895, "Hunter Green Vy Dk", 27, 83, 0, "I", 0],
  [898, "Coffee Brown Vy Dk", 73, 42, 19, "O", 0],
  [899, "Rose Medium", 242, 118, 136, "P", 0],
  [900, "Burnt Orange Dark", 209, 88, 7, "[]", 0],
  [902, "Garnet Very Dark", 130, 38, 55, "{}", 0],
  [904, "Parrot Green V Dk", 85, 120, 34, "A", 0],
  [905, "Parrot Green Dk", 98, 138, 40, "S", 0],
  [906, "Parrot Green Md", 127, 179, 53, "D", 0],
  [907, "Parrot Green Lt", 199, 230, 102, "F", 0],
  [909, "Emerald Green Vy Dk", 21, 111, 73, "𓆗", 0],
  [910, "Emerald Green Dark", 24, 126, 86, "𓃠", 0],
  [911, "Emerald Green Med", 24, 144, 101, "𓄃", 0],
  [912, "Emerald Green Lt", 27, 157, 107, "𓃱", 0],
  [913, "Nile Green Med", 109, 171, 119, "𓅄", 0],
  [915, "Plum Dark", 130, 0, 67, "ㅂ", 0],
  [917, "Plum Medium", 155, 19, 89, "ㅅ", 0],
  [918, "Red Copper Dark", 130, 52, 10, "ㅇ", 0],
  [919, "Red Copper", 166, 69, 16, "ㅈ", 0],
  [920, "Copper Med", 172, 84, 20, "ㅊ", 0],
  [921, "Copper", 198, 98, 24, "ㅋ", 0],
  [922, "Copper Light", 226, 115, 35, "ㅌ", 0],
  [924, "Gray Green Vy Dark", 86, 106, 106, "ㅍ", 0],
  [926, "Gray Green Med", 152, 174, 174, "ㅎ", 0],
  [927, "Gray Green Light", 189, 203, 203, "ㄲ", 0],
  [928, "Gray Green Vy Lt", 221, 227, 227, "ㄸ", 0],
  [930, "Antique Blue Dark", 69, 92, 113, "ㅃ", 0],
  [931, "Antique Blue Medium", 106, 133, 158, "ㅉ", 0],
  [932, "Antique Blue Light", 162, 181, 198, "𖠁", 0],
  [934, "Avocado Grn Black", 49, 57, 25, "𓇊", 0],
  [935, "Avocado Green Dk", 66, 77, 33, "֎", 0],
  [936, "Avocado Grn V Dk", 76, 88, 38, "𖧷", 0],
  [937, "Avocado Green Md", 98, 113, 51, "❁", 0],
  [938, "Coffee Brown Ult Dk", 54, 31, 14, "ꕥ", 0],
  [939, "Navy Blue Very Dark", 27, 40, 83, "𑁍", 0],
  [943, "Green Bright Md", 61, 147, 132, "❃", 0],
  [945, "Tawny", 251, 213, 187, "✾", 0],
  [946, "Burnt Orange Med", 235, 99, 7, "⚘", 0],
  [947, "Burnt Orange", 255, 123, 77, "ㅆ", 0],
  [948, "Peach Very Light", 254, 231, 218, "෴", 0],
  [950, "Desert Sand Light", 238, 211, 196, "ᔐ", 0],
  [951, "Tawny Light", 255, 226, 207, "ᔑ", 0],
  [954, "Nile Green", 136, 186, 145, "𖡬", 0],
  [955, "Nile Green Light", 162, 214, 173, "𖣫", 0],
  [956, "Geranium", 255, 145, 145, "➥", 0],
  [957, "Geranium Pale", 253, 181, 181, "⇗", 0],
  [958, "Sea Green Dark", 62, 182, 161, "⇋", 0],
  [959, "Sea Green Med", 89, 199, 180, "➽", 0],
  [961, "Dusty Rose Dark", 207, 115, 115, "⟳", 0],
  [962, "Dusty Rose Medium", 230, 138, 138, "➣", 0],
  [963, "Dusty Rose Ult Vy Lt", 255, 215, 215, "↵", 0],
  [964, "Sea Green Light", 169, 226, 216, "⬊", 0],
  [966, "Jade Ultra Vy Lt", 185, 215, 192, "⬅", 0],
  [967, "Apricot Very Light", 255, 222, 213, "⬆", 0],
  [970, "Pumpkin Light", 247, 139, 19, "⬇", 0],
  [971, "Pumpkin", 246, 127, 0, "⮕", 0],
  [972, "Canary Deep", 255, 181, 21, "⬈", 0],
  [973, "Canary Bright", 255, 227, 0, "⬉", 0],
  [975, "Golden Brown Dk", 145, 79, 18, "⬋", 0],
  [976, "Golden Brown Med", 194, 129, 66, "⬌", 0],
  [977, "Golden Brown Light", 220, 156, 86, "⬍", 0],
  [986, "Forest Green Vy Dk", 64, 82, 48, "⮂", 0],
  [987, "Forest Green Dk", 88, 113, 65, "⮃", 0],
  [988, "Forest Green Med", 115, 139, 91, "⬱", 0],
  [989, "Forest Green ", 141, 166, 117, "⬳", 0],
  [991, "Aquamarine Dk", 71, 123, 110, "⬸", 0],
  [992, "Aquamarine Lt", 111, 174, 159, "⬿", 0],
  [993, "Aquamarine Vy Lt", 144, 192, 180, "⭅", 0],
  [995, "Electric Blue Dark", 38, 150, 182, "⭆", 0],
  [996, "Electric Blue Medium", 48, 194, 236, "↜", 0],
  [3011, "Khaki Green Dk", 137, 138, 88, "↝", 0],
  [3012, "Khaki Green Md", 166, 167, 93, "↞", 0],
  [3013, "Khaki Green Lt", 185, 185, 130, "↟", 0],
  [3021, "Brown Gray Vy Dk", 79, 75, 65, "↠", 0],
  [3022, "Brown Gray Med", 142, 144, 120, "↡", 0],
  [3023, "Brown Gray Light", 177, 170, 151, "↫", 0],
  [3024, "Brown Gray Vy Lt", 235, 234, 231, "↬", 0],
  [3031, "Mocha Brown Vy Dk", 75, 60, 42, "↯", 0],
  [3032, "Mocha Brown Med", 179, 159, 139, "↹", 0],
  [3033, "Mocha Brown Vy Lt", 227, 216, 204, "↸", 0],
  [3041, "Antique Violet Medium", 149, 111, 124, "↺", 0],
  [3042, "Antique Violet Light", 183, 157, 167, "↻", 0],
  [3045, "Yellow Beige Dk", 188, 150, 106, "⇍", 0],
  [3046, "Yellow Beige Md", 216, 188, 154, "⇎", 0],
  [3047, "Yellow Beige Lt", 231, 214, 193, "⇏", 0],
  [3051, "Green Gray Dk", 95, 102, 72, "⇪", 0],
  [3052, "Green Gray Md", 136, 146, 104, "⌅", 0],
  [3053, "Green Gray", 156, 164, 130, "☈", 0],
  [3064, "Desert Sand", 196, 142, 112, "➲", 0],
  [3072, "Beaver Gray Vy Lt", 230, 232, 232, "⇭", 0],
  [3078, "Golden Yellow Vy Lt", 253, 249, 205, "⊞", 0],
  [3325, "Baby Blue Light", 184, 210, 230, "⊟", 0],
  [3326, "Rose Light", 251, 173, 180, "⊠", 0],
  [3328, "Salmon Dark", 227, 109, 109, "▣", 0],
  [3340, "Apricot Med", 255, 131, 111, "▤", 0],
  [3341, "Apricot", 252, 171, 152, "▥", 0],
  [3345, "Hunter Green Dk", 27, 89, 21, "▧", 0],
  [3346, "Hunter Green", 64, 106, 58, "▩", 0],
  [3347, "Yellow Green Med", 113, 147, 92, "▨", 0],
  [3348, "Yellow Green Lt", 204, 217, 177, "◙", 0],
  [3350, "Dusty Rose Ultra Dark", 188, 67, 101, "◧", 0],
  [3354, "Dusty Rose Light", 228, 166, 172, "◩", 0],
  [3362, "Pine Green Dk", 94, 107, 71, "𖣯", 0],
  [3363, "Pine Green Md", 114, 130, 86, "◰", 0],
  [3364, "Pine Green", 131, 151, 95, "⿴", 0],
  [3371, "Black Brown", 30, 17, 8, "⫸", 0],
  [3607, "Plum Light", 197, 73, 137, "⫷", 0],
  [3608, "Plum Very Light", 234, 156, 196, "◮", 0],
  [3609, "Plum Ultra Light", 244, 174, 213, "◬", 0],
  [3685, "Mauve Very Dark", 136, 21, 49, "◭", 0],
  [3687, "Mauve", 201, 107, 112, "◢", 0],
  [3688, "Mauve Medium", 231, 169, 172, "◣", 0],
  [3689, "Mauve Light", 251, 191, 194, "◤", 0],
  [3705, "Melon Dark", 255, 121, 146, "◥", 0],
  [3706, "Melon Medium", 255, 173, 188, "╔", 0],
  [3708, "Melon Light", 255, 203, 213, "╗", 0],
  [3712, "Salmon Medium", 241, 135, 135, "╚", 0],
  [3713, "Salmon Very Light", 255, 226, 226, "⦚⌇", 0],
  [3716, "Dusty Rose Med Vy Lt", 255, 189, 189, "𖤩", 0],
  [3721, "Shell Pink Dark", 161, 75, 81, "𖢦", 0],
  [3722, "Shell Pink Med", 188, 108, 100, "𖦹", 0],
  [3726, "Antique Mauve Dark", 155, 91, 102, "𖥷", 0],
  [3727, "Antique Mauve Light", 219, 169, 178, "M", 0],
  [3731, "Dusty Rose Very Dark", 218, 103, 131, "L", 0],
  [3733, "Dusty Rose", 232, 135, 155, "ₓˣ", 0],
  [3740, "Antique Violet Dark", 120, 87, 98, "⛒", 0],
  [3743, "Antique Violet Vy Lt", 215, 203, 211, "⛝", 0],
  [3746, "Blue Violet Dark", 119, 107, 152, "⬢", 0],
  [3747, "Blue Violet Vy Lt", 211, 215, 237, "❖", 0],
  [3750, "Antique Blue Very Dk", 56, 76, 94, "⊖", 0],
  [3752, "Antique Blue Very Lt", 199, 209, 219, "𖨂", 0],
  [3753, "Antique Blue Ult Vy Lt", 219, 226, 233, "赛", 0],
  [3755, "Baby Blue", 147, 180, 206, "伊", 0],
  [3756, "Baby Blue Ult Vy Lt", 238, 252, 252, "8", 0],
  [3760, "Wedgewood Med", 62, 133, 162, "热", 0],
  [3761, "Sky Blue Light", 172, 216, 226, "用", 0],
  [3765, "Peacock Blue Vy Dk", 52, 127, 140, "也", 0],
  [3766, "Peacock Blue Light", 153, 207, 217, "⊙", 0],
  [3768, "Gray Green Dark", 101, 127, 127, "⊚", 0],
  [3770, "Tawny Vy Light", 255, 238, 227, "⊛", 0],
  [3771, "Terra Cotta Ult Vy Lt", 244, 187, 169, "给", 0],
  [3772, "Desert Sand Vy Dk", 160, 108, 80, "得", 0],
  [3773, "Desert Sand Dark", 182, 117, 82, "◉", 0],
  [3774, "Desert Sand Vy Lt", 243, 225, 215, "○", 0],
  [3776, "Mahogany Light", 207, 121, 57, "◌", 0],
  [3777, "Terra Cotta Vy Dk", 134, 48, 34, "◒", 0],
  [3778, "Terra Cotta Light", 217, 137, 120, "◑", 0],
  [3779, "Rosewood Ult Vy Lt", 248, 202, 200, "◐", 0],
  [3781, "Mocha Brown Dk", 107, 87, 67, "*^", 0],
  [3782, "Mocha Brown Lt", 210, 188, 166, "⎚", 0],
  [3787, "Brown Gray Dark", 98, 93, 80, "✘", 0],
  [3790, "Beige Gray Ult Dk", 127, 106, 85, "贝", 0],
  [3799, "Pewter Gray Vy Dk", 66, 66, 66, "非", 0],
  [3801, "Melon Very Dark", 231, 73, 103, "÷", 0],
  [3802, "Antique Mauve Vy Dk", 113, 65, 73, "±", 0],
  [3803, "Mauve Dark", 171, 51, 87, "∓", 0],
  [3804, "Cyclamen Pink Dark", 224, 40, 118, "≥", 0],
  [3805, "Cyclamen Pink", 243, 71, 139, "≤", 0],
  [3806, "Cyclamen Pink Light", 255, 140, 174, "≠", 0],
  [3807, "Cornflower Blue", 96, 103, 140, "∑", 0],
  [3808, "Turquoise Ult Vy Dk", 54, 105, 112, "∏", 0],
  [3809, "Turquoise Vy Dark", 63, 124, 133, "ℤ", 0],
  [3810, "Turquoise Dark", 72, 142, 154, "ℕ", 0],
  [3811, "Turquoise Very Light", 188, 227, 230, "ℚ", 0],
  [3812, "Sea Green Vy Dk", 47, 140, 132, "ℝ", 0],
  [3813, "Blue Green Lt", 178, 212, 189, "ℂ", 0],
  [3814, "Aquamarine", 80, 139, 125, "∮", 0],
  [3815, "Celadon Green Dk", 71, 119, 89, "≇", 0],
  [3816, "Celadon Green", 101, 165, 125, "₳", 0],
  [3817, "Celadon Green Lt", 153, 195, 170, "ℍ", 0],
  [3818, "Emerald Grn Ult V Dk", 17, 90, 59, "𝔸", 0],
  [3819, "Moss Green Lt", 224, 232, 104, "∃", 0],
  [3820, "Straw Dark", 223, 182, 95, "⊆", 0],
  [3821, "Straw", 243, 206, 117, "__+", 0],
  [3822, "Straw Light", 246, 220, 152, "777", 0],
  [3823, "Yellow Ultra Pale", 255, 253, 227, "≟", 0],
  [3824, "Apricot Light", 254, 205, 194, "℘", 0],
  [3825, "Pumpkin Pale", 253, 189, 150, "¦", 0],
  [3826, "Golden Brown", 173, 114, 57, "X̄", 0],
  [3827, "Golden Brown Pale", 247, 187, 119, "⅋", 0],
  [3828, "Hazelnut Brown", 183, 139, 97, "⋀", 0],
  [3829, "Old Gold Vy Dark", 169, 130, 4, "⋁", 0],
  [3830, "Terra Cotta", 185, 85, 68, "⟨⟩", 0],
  [3831, "Raspberry Dark", 179, 47, 72, "∄", 0],
  [3832, "Raspberry Medium", 219, 85, 110, "∠", 0],
  [3833, "Raspberry Light", 234, 134, 153, "≄", 0],
  [3834, "Grape Dark", 114, 55, 93, "∦", 0],
  [3835, "Grape Medium", 148, 96, 131, "⊇", 0],
  [3836, "Grape Light", 186, 145, 170, "≧", 0],
  [3837, "Lavender Ultra Dark", 108, 58, 110, "≪", 0],
  [3838, "Lavender Blue Dark", 92, 114, 148, "≦", 0],
  [3839, "Lavender Blue Med", 123, 142, 171, "!", 0],
  [3840, "Lavender Blue Light", 176, 192, 218, "≳", 0],
  [3841, "Baby Blue Pale", 205, 223, 237, "⊀", 0],
  [3842, "Wedgewood Vry Dk", 50, 102, 124, "⊁", 0],
  [3843, "Electric Blue", 20, 170, 208, "α", 0],
  [3844, "Turquoise Bright Dark", 18, 174, 186, "β", 0],
  [3845, "Turquoise Bright Med", 4, 196, 202, "φ", 0],
  [3846, "Turquoise Bright Light", 6, 227, 230, "⊃", 0],
  [3847, "Teal Green Dark", 52, 125, 117, "∴", 0],
  [3848, "Teal Green Med", 85, 147, 146, "兀", 0],
  [3849, "Teal Green Light", 82, 179, 164, "θ", 0],
  [3850, "Green Bright Dk", 55, 132, 119, "ξ", 0],
  [3851, "Green Bright Lt", 73, 179, 161, "ζ", 0],
  [3852, "Straw Very Dark", 205, 157, 55, "χ", 0],
  [3853, "Autumn Gold Dk", 242, 151, 70, "Ψ", 0],
  [3854, "Autumn Gold Med", 242, 175, 104, "ω", 0],
  [3855, "Autumn Gold Lt", 250, 211, 150, "Ξ", 0],
  [3856, "Mahogany Ult Vy Lt", 255, 211, 181, "Ω", 0],
  [3857, "Rosewood Dark", 104, 37, 26, "ς", 0],
  [3858, "Rosewood Med", 150, 74, 63, "Ā", 0],
  [3859, "Rosewood Light", 186, 139, 124, "Ď", 0],
  [3860, "Cocoa", 125, 93, 87, ", 0]", 0],
  [3861, "Cocoa Light", 166, 136, 129, "‰", 0],
  [3862, "Mocha Beige Dark", 138, 110, 78, "ぎ", 0],
  [3863, "Mocha Beige Med", 164, 131, 92, "฿", 0],
  [3864, "Mocha Beige Light", 203, 182, 156, "₵", 0],
  [3865, "Winter White", 249, 247, 241, "₪", 0],
  [3866, "Mocha Brn Ult Vy Lt", 250, 246, 240, "₽", 0],
];

function dmcColor(r, g, b, colorList) {
  let minDistance = Number.MAX_VALUE;
  let closestColorIndex = 0;

  colorList.forEach((color, index) => {
    const distance = Math.sqrt(
      (r - color[2]) ** 2 + (g - color[3]) ** 2 + (b - color[4]) ** 2
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestColorIndex = index;
    }
  });

  colorList[closestColorIndex][6]++;
  return [colorList[closestColorIndex], closestColorIndex];
}

function getAvgColor(data, size) {
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }
  return [r / (size * size), g / (size * size), b / (size * size)];
}

function convertImage(colorList, newSize) {
  colorList.forEach((color) => (color[6] = 0));
  ctx.font = `${newSize / 4}px Arial`;
  dmcColorList.forEach((color) => {
    color[6] = 0;
  });

  for (let i = 0; i < canvas.width / newSize; i++) {
    for (let j = 0; j < canvas.height / newSize; j++) {
      const pixel = ctx.getImageData(
        i * newSize,
        j * newSize,
        newSize,
        newSize
      );
      const avgColor = getAvgColor(pixel.data, newSize);
      const [dmcColorResult, colorIndex] = dmcColor(
        avgColor[0],
        avgColor[1],
        avgColor[2],
        colorList
      );

      usedDmcColorsIndex[colorIndex] =
        (usedDmcColorsIndex[colorIndex] || 0) + 1;

      for (let k = 0; k < pixel.data.length; k += 4) {
        pixel.data[k] = dmcColorResult[2];
        pixel.data[k + 1] = dmcColorResult[3];
        pixel.data[k + 2] = dmcColorResult[4];
      }

      ctx.putImageData(pixel, i * newSize, j * newSize);
      ctx.fillStyle = "black";

      ctx.fillText(
        dmcColorResult[5],
        i * newSize + newSize / 2,
        j * newSize + newSize / 2
      );
    }
  }
}

let img = new Image();
fileInput.addEventListener("change", function (e) {
  let file = e.target.files[0];
  let reader = new FileReader();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  reader.onload = function (event) {
    canvas.innerHTML = "";
    img.onload = function () {
      let countKletok = parseInt(inpWidth.value);
      let newSize = Math.ceil(img.width / countKletok);

      canvas.width = countKletok * newSize;
      canvas.height = Math.ceil(img.height / newSize) * newSize;
      console.log(newSize);
      ctx.drawImage(
        img,
        0,
        0,
        countKletok * newSize,
        Math.ceil(img.height / newSize) * newSize
      );
      usedDmcColorsIndex = {};
      dmcColorList.forEach((color) => {
        color[6] = 0;
      });
      convertImage(dmcColorList, newSize);
      setka();
      drawLegend(dmcColorList);
    };

    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

btnSize.addEventListener("click", function () {
  let width = parseInt(inpWidth.value);
  let newSize = Math.ceil(img.width / width);

  if (width > 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = width * newSize;
    canvas.height = Math.ceil(img.height / newSize) * newSize;
    ctx.drawImage(
      img,
      0,
      0,
      width * newSize,
      Math.ceil(img.height / newSize) * newSize
    );

    usedDmcColorsIndex = {};
    dmcColorList.forEach((color) => {
      color[6] = 0;
    });
    convertImage(dmcColorList, newSize);
    setka();
    drawLegend(dmcColorList);
  }
});

function setka() {
  let width = parseInt(inpWidth.value);
  let newSize = Math.ceil(img.width / width);
  for (let i = 0; i < canvas.width / newSize; i++) {
    for (let j = 0; j < canvas.height / newSize; j++) {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(i * newSize, j * newSize, newSize, newSize);
      if (i % 10 === 0) {
        ctx.lineWidth = 2;
        ctx.moveTo(i * newSize, 0);
        ctx.lineTo(i * newSize, canvas.height);
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
      if (j % 10 === 0) {
        ctx.lineWidth = 2;
        ctx.moveTo(0, j * newSize);
        ctx.lineTo(canvas.width, j * newSize);
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
    }
  }
}

function drawLegend(ColorList) {
  let legendDiv = document.getElementById("legend");
  legendDiv.innerHTML = "";
  legendDiv.style.margin = canvas.width;
  let colorsArray = Object.entries(usedDmcColorsIndex);

  for (let i = 0; i < colorsArray.length; i++) {
    const colorIndex = colorsArray[i][0];
    const colorCount = colorsArray[i][1];
    const color = ColorList[colorIndex];

    let legendItem = document.createElement("div");
    legendItem.innerHTML = `<p>${i + 1}. ${color[5]} - ${color[1]} (${
      color[0]
    }) </p>`;
    legendDiv.appendChild(legendItem);
  }
}

btnColorLength.addEventListener("click", function () {
  let colorLength = parseInt(colorLengthInput.value);
  let width = parseInt(inpWidth.value);
  let newSize = Math.ceil(img.width / width);
  ctx.drawImage(
    img,
    0,
    0,
    width * newSize,
    Math.ceil(img.height / newSize) * newSize
  );
  dmcColorList.forEach((color) => {
    color[6] = 0;
  });
  convertImage(dmcColorList, newSize);

  let sorted = dmcColorList;

  let sortedArr = sorted.slice().sort((a, b) => b[6] - a[6]);
  if (colorLength > 0 && colorLength <= dmcColorList.length) {
    let slicedArr = sortedArr.slice(0, colorLength);
    usedDmcColorsIndex = {};
    dmcColorList.forEach((color) => {
      color[6] = 0;
    });
    convertImage(slicedArr, newSize);
    setka();
    drawLegend(slicedArr);
  } else {
    alert("Пожалуйста, введите число от 1 до " + dmcColorList.length);
  }
});
