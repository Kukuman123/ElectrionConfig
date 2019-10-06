var elec_config = ''
var last_orbital = ''
var last_period = null

function filter (electrons) {
  switch (electrons) {
    case 1:
      elec_config = '1s^1'
      last_orbital = 's'
      last_period = 1
      break
    case 2:
      elec_config = '1s^2'
      last_orbital = 's'
      last_period = 1
      break
    case 3:
      elec_config = '1s^2 2s^1'
      last_orbital = 's'
      last_period = 2
      break
    case 4:
      elec_config = '1s^2 2s^2'
      last_orbital = 's'
      last_period = 2
      break
    case 5:
      elec_config = '1s^2 2s^2 2p^1'
      last_orbital = 'p'
      last_period = 2
      break
    case 6:
      elec_config = '	1s^2 2s^2 2p^2'
      last_orbital = 'p'
      last_period = 2
      break
    case 7:
      elec_config = '1s^2 2s^2 2p^3'
      last_orbital = 'p'
      last_period = 2
      break
    case 8:
      elec_config = '1s^2 2s^2 2p^4'
      last_orbital = 'p'
      last_period = 2
      break
    case 9:
      elec_config = '1s^2 2s^2 2p^5'
      last_orbital = 'p'
      last_period = 2
      break
    case 10:
      elec_config = '1s^2 2s^2 2p^6'
      last_orbital = 'p'
      last_period = 2
      break
    case 11:
      elec_config = '1s^2 2s^2 2p^6 3s^1'
      last_orbital = 's'
      last_period = 3
      break
    case 12:
      elec_config = '1s^2 2s^2 2p^6 3s^2'
      last_orbital = 's'
      last_period = 3
      break
    case 13:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^1'
      last_orbital = 'p'
      last_period = 3
      break
    case 14:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^2'
      last_orbital = 'p'
      last_period = 3
      break
    case 15:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^3'
      last_orbital = 'p'
      last_period = 3
      break
    case 16:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^4'
      last_orbital = 'p'
      last_period = 3
      break
    case 17:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^5'
      last_orbital = 'p'
      last_period = 3
      break
    case 18:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6'
      last_orbital = 'p'
      last_period = 3
      break
    case 19:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^1'
      last_orbital = 's'
      last_period = 4
      break
    case 20:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2'
      last_orbital = 'p'
      last_period = 2
      break
    case 21:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^1'
      last_orbital = 'd'
      last_period = 3
      break
    case 22:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^2'
      last_orbital = 'd'
      last_period = 3
      break
    case 23:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^3'
      last_orbital = 'd'
      last_period = 3
      break
    case 24:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5'
      last_orbital = 'd'
      last_period = 3
      break
    case 25:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^5'
      last_orbital = 'd'
      last_period = 3
      break
    case 26:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6'
      last_orbital = 'd'
      last_period = 3
      break
    case 27:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^7'
      last_orbital = 'd'
      last_period = 3
      break
    case 28:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3^p6 4s^2 3d^8'
      last_orbital = 'd'
      last_period = 3
      break
    case 29:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^10'
      last_orbital = 'd'
      last_period = 3
      break
    case 30:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10'
      last_orbital = 'd'
      last_period = 3
      break
    case 31:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^1'
      last_orbital = 'p'
      last_period = 4
      break
    case 32:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^2'
      last_orbital = 'p'
      last_period = 4
      break
    case 33:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^3'
      last_orbital = 'p'
      last_period = 4
      break
    case 34:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^4'
      last_orbital = 'p'
      last_period = 4
      break
    case 35:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^5'
      last_orbital = 'p'
      last_period = 4
      break
    case 36:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6'
      last_orbital = 'p'
      last_period = 4
      break
    case 37:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1'
      last_orbital = 's'
      last_period = 5
      break
    case 38:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2'
      last_orbital = 's'
      last_period = 5
      break
    case 39:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^1'
      last_orbital = 'd'
      last_period = 4
      break
    case 40:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^2'
      last_orbital = 'd'
      last_period = 4
      break
    case 41:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^4'
      last_orbital = 'd'
      last_period = 4
      break
    case 42:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^5'
      last_orbital = 'd'
      last_period = 4
      break
    case 43:
      elec_config = ' 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^5'
      last_orbital = 'd'
      last_period = 4
      break
    case 44:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^7'
      last_orbital = 'd'
      last_period = 4
      break
    case 45:
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^8'
      last_orbital = 'd'
      last_period = 4
      break
    case 46:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 4d^10'
      last_orbital = 'd'
      last_period = 4
      break
    case 47:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^10'
      last_orbital = 'd'
      last_period = 4
      break
    case 48:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10'
      last_orbital = 'd'
      last_period = 4
      break
    case 49:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^1'
      last_orbital = 'p'
      last_period = 5
      break
    case 50:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^2'
      last_orbital = 'p'
      last_period = 5
      break
    case 51:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^3'
      last_orbital = 'p'
      last_period = 5
      break
    case 52:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^4'
      last_orbital = 'p'
      last_period = 5
      break
    case 53:
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^5'
      last_orbital = 'p'
      last_period = 5
      break
    case 54:
      elec_config = ' 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p6^5s^2 4d^10 5p^6'
      last_orbital = 'p'
      last_period = 5
      break

    case 'Hydrogen':
      elec_config = '1s^1'
      last_orbital = 's'
      last_period = 1
      break
    case 'Helium':
      elec_config = '1s^2'
      last_orbital = 's'
      last_period = 1
      break
    case 'Lithium':
      elec_config = '1s^2 2s^1'
      last_orbital = 's'
      last_period = 2
      break
    case 'Beryllium':
      elec_config = '1s^2 2s^2'
      last_orbital = 's'
      last_period = 2
      break
    case 'Boron':
      elec_config = '1s^2 2s^2 2p^1'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Carbon':
      elec_config = '	1s^2 2s^2 2p^2'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Nitrogen':
      elec_config = '1s^2 2s^2 2p^3'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Oxygen':
      elec_config = '1s^2 2s^2 2p^4'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Flourine':
      elec_config = '1s^2 2s^2 2p^5'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Neon':
      elec_config = '1s^2 2s^2 2p^6'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Sodium':
      elec_config = '1s^2 2s^2 2p^6 3s^1'
      last_orbital = 's'
      last_period = 3
      break
    case 'Magnesium':
      elec_config = '1s^2 2s^2 2p^6 3s^2'
      last_orbital = 's'
      last_period = 3
      break
    case 'Aluminum':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^1'
      last_orbital = 'p'
      last_period = 3
      break
    case 'Silicon':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^2'
      last_orbital = 'p'
      last_period = 3
      break
    case 'Phosphorous':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^3'
      last_orbital = 'p'
      last_period = 3
      break
    case 'Sulfur':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^4'
      last_orbital = 'p'
      last_period = 3
      break
    case 'Chlorine':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^5'
      last_orbital = 'p'
      last_period = 3
      break
    case 'Argon':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6'
      last_orbital = 'p'
      last_period = 3
      break
    case 'Potassium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^1'
      last_orbital = 's'
      last_period = 4
      break
    case 'Calcium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2'
      last_orbital = 'p'
      last_period = 2
      break
    case 'Scandium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^1'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Titanium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^2'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Vanadium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^3'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Chromium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Manganese':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^5'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Iron':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Cobalt':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^7'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Nickel':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3^p6 4s^2 3d^8'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Copper':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^10'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Zinc':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10'
      last_orbital = 'd'
      last_period = 3
      break
    case 'Gallium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^1'
      last_orbital = 'p'
      last_period = 4
      break
    case 'Germanium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^2'
      last_orbital = 'p'
      last_period = 4
      break
    case 'Arsenic':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^3'
      last_orbital = 'p'
      last_period = 4
      break
    case 'Selenium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^4'
      last_orbital = 'p'
      last_period = 4
      break
    case 'Bromine':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^5'
      last_orbital = 'p'
      last_period = 4
      break
    case 'Krypton':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6'
      last_orbital = 'p'
      last_period = 4
      break
    case 'Rubidium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1'
      last_orbital = 's'
      last_period = 5
      break
    case 'Strontium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2'
      last_orbital = 's'
      last_period = 5
      break
    case 'Yttrium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^1'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Zirconium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^2'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Niobium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^4'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Molybdenum':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^5'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Technetium':
      elec_config = ' 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^5'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Ruthenium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^7'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Rhodium':
      elec_config = '1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^8'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Palladium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 4d^10'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Silver':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^1 4d^10'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Cadmium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10'
      last_orbital = 'd'
      last_period = 4
      break
    case 'Indium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^1'
      last_orbital = 'p'
      last_period = 5
      break
    case 'Tin':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^2'
      last_orbital = 'p'
      last_period = 5
      break
    case 'Antimony':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^3'
      last_orbital = 'p'
      last_period = 5
      break
    case 'Tellurium':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^4'
      last_orbital = 'p'
      last_period = 5
      break
    case 'Iodine':
      elec_config = '	1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^6 5s^2 4d^10 5p^5'
      last_orbital = 'p'
      last_period = 5
      break
    case 'Xenon':
      elec_config = ' 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p6^5s^2 4d^10 5p^6'
      last_orbital = 'p'
      last_period = 5
      break
  }

  return {
    elec_config,
    last_orbital,
    last_period
  }
}
