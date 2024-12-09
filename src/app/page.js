import Link from "next/link"; // Import the Link component from Next.js

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
    <nav className="bg-white p-4 max-w-[100%] h-[124px] border border-[#C3D4E966]">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
  
        {/* "MORENT" link */}
        <Link
          href="/"
          className="text-[#3563E9] font-bold flex items-center justify-center"
          style={{
            width: '148px',
            height: '44px',
            top: '40px',
            left: '60px',
            gap: '0px',
            opacity: '1',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '-0.03em',
            textAlign: 'left',
            position: 'absolute',
          }}
        >
          <span>MORENT</span>
        </Link>
  
        {/* Search Bar Container */}
        <div
          className="relative"
          style={{
            top: '40px',
            left: '272px',
            width: '492px',
            height: '44px',
          }}
        >
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full pl-12 rounded-[70px] border border-[#C3D4E966] bg-white text-black opacity-100 focus:outline-none"
          />
          {/* Search Icon */}
          <i
            className="fa fa-search absolute"
            style={{
              width: '24px',
              height: '24px',
              top: '10px', // Center icon vertically
              left: '12px', // Align icon inside padding
              fontSize: '25px', // Increased font size
              color: '#596780',
            }}
          />
        </div>
  
        {/* Icons Container (Heart, Notification, Settings, Image) */}
        <div
          className="absolute flex items-center gap-4"
          style={{
            width: '236px', // Combined width of all icons
            height: '44px',
            top: '50px',
            right: '30px', // Adjusted to keep it aligned to the right
          }}
        >
          {/* Heart Icon */}
          <i
            className="fa fa-heart"
            style={{
              width: '44px',
              height: '44px',
              fontSize: '24px',
              color: '#596780',
              opacity: '1',
            }}
          />
  
          {/* Notification Icon */}
          <i
            className="fa fa-bell"
            style={{
              width: '44px',
              height: '44px',
              fontSize: '24px',
              color: '#596780',
              opacity: '1',
            }}
          />
  
          {/* Setting Icon */}
          <i
            className="fa fa-gear"
            style={{
              width: '44px',
              height: '44px',
              fontSize: '24px',
              color: '#596780',
              opacity: '1',
            }}
          />
  
          {/* Image next to the settings icon */}
          <img
            src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SewF4HShGoHobjF4XQXMpGI4FxLYPtIYcpM09w0vRGgEf3ZSd1L0VOZNDaewTbvVqTLfW19SoLc5R0GPN~wbSTgmezXL8iN5OPGFN4tViX~mivCa-xFm9TqnmXZBNDgDsm246HGTTO1rmxUY~lXxiDNwS0EUdR-JK5i~Bify4zMZTuL9HjWbvJ9IQHTbU55XSJOkoLfymf2TZweae0lkdmUJPmRrCWM8VcgpjRLUkTQ8940cPyMEaV9G44BGgpym~KI5UWgxYat-Luq8KD~R48XOFFAhLk2p~SMOO3qoHQXF5vMKEA4MxLtIHktXWOclbId4KVmX5JMzz7ERf1EhJg__"
            alt="Image"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%', // This gives a circular shape to the image
              opacity: '1',
              position: 'relative',
              top: '-10px', // Adjust this value to move the image upwards
            }}
          />
        </div>
      </div>
    </nav>

  

      {/* Centered Card Container */}
      <div className="flex justify-center gap-6 mt-8 px-4">
        {/* Two Larger Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4">
          {/* Larger Card 1 */}
          <div
            className="bg-[#54A6FF] text-white p-6 rounded-lg"
            style={{
              height: '420px', // Height of the larger card
              position: 'relative',
            }}
          >
            <h1 className="text-xl font-semibold" style={{ marginBottom: '20px', fontSize: '32px',width:'50%', lineHeight:'1.3' }}>
              The Best Platform For Car Rental
            </h1>
            <p className="text-white" style={{ fontSize: '16px', marginBottom: '20px', fontSize:'20px', width:'60%' }}>
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>

            {/* Price and Rent Now button inside the card */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-[#3563E9] text-white py-2 px-8 rounded-md hover:bg-[#2855b6]">
                Rent Car
              </button>
            </div>

            <img
              src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od1UBAJf7E5O46664edEbxigGSpM3-JsBv04704PcK-9d~RrvEs6ppQdIFAuV5SO7DK4KdIOedl7rLfh~ZdB8p2H010WWUIxpXiNh9sQzC8FF~k9lq2soe-51CJOCWNOQ9uBXLpaV2LlgrPiSwu1sOYI0xh~8DBSlQU2flfi~ymjFBtsgzmBfOZ~JLvE2WnajtJi5we3G6HDB9TGun3wd~4ItGLCzi-d13QfTCKEnDG8TSJFZPpuhqdW7969joySadH-urF54-xyCZb73147LVY6vp7yqYicDPozXo-d2EmYfXV9MsNGO99O7z6K3K9ay3ZXZ4wiPTFv3OpE5E4otw__"
              alt="Car"
              style={{
                width: '360px',
                height: '175px',
                opacity: '1',
                position: 'absolute',
                bottom: '-10px',
                right: '110px',
              }}
            />
          </div>

          {/* Larger Card 2 */}
          <div
            className="bg-[#3563E9] text-white p-6 rounded-lg"
            style={{
              height: '420px', // Height of the larger card
              position: 'relative',
            }}
          >
            <h1 className="text-xl font-semibold" style={{ marginBottom: '20px', fontSize: '32px', width:'50%', lineHeight:'1.3' }}>
Easy way to rent a car at low price            </h1>
            <p className="text-white" style={{ fontSize: '16px', marginBottom: '20px' , fontSize:'20px', width:'60%'}}>
Providing cheap car rental services and safe and comfortable facilities            </p>

            {/* Price and Rent Now button inside the card */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-[#54A6FF] text-white py-2 px-8 rounded-md hover:bg-[#2855b6]">
                Rent Car
              </button>
            </div>

            <img
  src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__"
  alt="Car"
  style={{
    width: '300px',
    height: '175px',
    opacity: '1',
    position: 'absolute',
    bottom: '-10px',
    right: '110px',
    transform: 'scaleX(-1)',  // Proper syntax for flip
  }}
/>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4">
      {/* First Set of 4 Smaller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          { name: 'Koenigsegg',deccription: 'sport', imageSrc: 'https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Od1UBAJf7E5O46664edEbxigGSpM3-JsBv04704PcK-9d~RrvEs6ppQdIFAuV5SO7DK4KdIOedl7rLfh~ZdB8p2H010WWUIxpXiNh9sQzC8FF~k9lq2soe-51CJOCWNOQ9uBXLpaV2LlgrPiSwu1sOYI0xh~8DBSlQU2flfi~ymjFBtsgzmBfOZ~JLvE2WnajtJi5we3G6HDB9TGun3wd~4ItGLCzi-d13QfTCKEnDG8TSJFZPpuhqdW7969joySadH-urF54-xyCZb73147LVY6vp7yqYicDPozXo-d2EmYfXV9MsNGO99O7z6K3K9ay3ZXZ4wiPTFv3OpE5E4otw__', price: '$99/day' },
          { name: 'Nissan GT-R',deccription: 'sport', imageSrc: 'https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__', price: '$80/day' },
          { name: 'Rols-Royce',deccription: 'sedan', imageSrc: 'https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4kWQF-RwLWQA4ZCB1mZjfVcn2qRUO2VP84Jx~2F2jaCKQpL1pCshHjbZ~Fx2s4ysHB9ldzzLqcrdqRmarAVvy9gSpSgRiXYZdRiFCo-0ZPbyMP6KsGMXlup6InpNBYsV8aLL-snTW-9YtBwQ5Qm61bW6ZpzjFF0azAQyEfczvZiilEwT2dlZeRpwZzY6dwZJRPY1bWd~v4SE0xl-sodJJnyPgms4P7UMeg2vGNT32shp09ieuU6hlGZ1V2Uy1RYg0cA~nspeUFsi-w9FO7gf2G9rsi0jaZFbuOhgS8Q4ho7xAv0C5meMBKGRsNg7F8TWK7IjjtplzkhDSC9yVlBdQ__', price: '$96/day' },
          { name: 'Nissan GT-R',deccription: 'sport', imageSrc: 'https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqchb2LXG1CzJVi8REocxTFmgsniQaQk94twikFDvW6t8unY0uN2iDgogKE7OynrmQcTaYNIAx5gzKNwVosBBUk67rgYzDQoM~MF6xD~Q4FdJCThW4M9Jx5ivd8zn4ZhbCj1htJh0idZ4nfAHEhovLfAheB7Pzse-8b4sPa3zWL8gnyyGjO7I9oi438zN0Uowsd4br~oZbWBc~d6b94I0IrcmL3OABEejvj1qBBnPvFqVYMuYmR7XEEfzN~EiPGCbSgAvJQJKT8YUrjxu-Ac5KIA5ELqg7y44XdIxm2sy2j~xK35INzWCwGjLIfRoGy3hyxBMeyOALaz0FypwC6N2A__', price: '$80/day' }
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[white] text-black border-2 p-4 rounded-md flex flex-col justify-between"
            style={{ height: '300px' }}
          >
            <h3 className="text-xl font-semibold mb-2">{card.name}</h3> {/* Dynamic name */}
            <p className="text-black mb-4" style={{ fontSize: '16px' }}>
              {card.name}.
            </p>
            <img
              src={card.imageSrc}
              alt={`Card ${index + 1} Image`}
              className="mb-4 rounded-md"
              style={{
                width: index === 2 ? '85%' : '100%', // Custom width for the 3rd card
                height: index === 2 ? '70px' : '150px', // Custom height for the 3rd card
                objectFit: 'cover',
                margin: index === 2 ? '0 auto' : '0', // Center the 3rd image if width is reduced
              }}
            />
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{card.price}</p>
              <button className="bg-[#3563E9] text-white py-2 px-4 rounded-md hover:bg-[#2855b6]">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second Set of 4 Smaller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          { name: 'All New Rush', imageSrc: 'https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXI~y-OWux0iMmwYjmoICYaSXVL71lkyD7nURbHJCj4h2kzxNRW7DpPWt7uJX1F~WxFbJrNinS-4wNiPWCR4CjoTW45MJRxUogsN4bLAD3UzBL9UkFtfZXD3L8ePGAfeV6MJjSPNBfbAKfqqsYmTnfV1x8CwrSDFnMCySQCF~wK7Dx~o~bsSM7A2umc-OhMOg1-h0~-9~pz9c9xKe6HKKCH5ZIV1TTFEdqTAh~wZFTDPMvdGkRo05wS52LYwjSkW2JyflJoRyQd9I-QU~vmykzPdOVUbn4tw73rXN06bUseoXrYI~T61BDFlehSkBLCL8OvHbnsWAGLCCzfgUTfzhg__', price: '$85/day' },
          { name: 'CR -V', imageSrc: 'https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iEtd1L31~SDARUmAQn-fQkL~Oc002f42558hDobFA6RJWgLxTIoGX46soH3MXqjkKUZk96~MLUOQUo2X~Khc0~ybcLZ5m8WYhxLFd3CP11vPe0eWkGPUEOxLmeoN39GWHRjs6WH8GFIYSdL9wtR3kNcFkB8Lv2HRApChp7ZSd0y83ETIbvpCVjNNWy6981~g-cDsDR9KW712eoFqhBi3z4d~Y-pA8IVe6WnnKH00y-fWR-cvKPfKkuAmRuN1vSeJZYp7v5xM6Ift8PudJhkAkCz14qIdAvteQHpxZAscw4mhO-RQaD~O~fNZXWfBZZ8eiLgcqqOVtsetmD7bklwWZg__', price: '$100/day' },
          { name: 'All New Terios', imageSrc: 'https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXI~y-OWux0iMmwYjmoICYaSXVL71lkyD7nURbHJCj4h2kzxNRW7DpPWt7uJX1F~WxFbJrNinS-4wNiPWCR4CjoTW45MJRxUogsN4bLAD3UzBL9UkFtfZXD3L8ePGAfeV6MJjSPNBfbAKfqqsYmTnfV1x8CwrSDFnMCySQCF~wK7Dx~o~bsSM7A2umc-OhMOg1-h0~-9~pz9c9xKe6HKKCH5ZIV1TTFEdqTAh~wZFTDPMvdGkRo05wS52LYwjSkW2JyflJoRyQd9I-QU~vmykzPdOVUbn4tw73rXN06bUseoXrYI~T61BDFlehSkBLCL8OvHbnsWAGLCCzfgUTfzhg__', price: '$95/day' },
          { name: 'CR -V', imageSrc: 'https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iEtd1L31~SDARUmAQn-fQkL~Oc002f42558hDobFA6RJWgLxTIoGX46soH3MXqjkKUZk96~MLUOQUo2X~Khc0~ybcLZ5m8WYhxLFd3CP11vPe0eWkGPUEOxLmeoN39GWHRjs6WH8GFIYSdL9wtR3kNcFkB8Lv2HRApChp7ZSd0y83ETIbvpCVjNNWy6981~g-cDsDR9KW712eoFqhBi3z4d~Y-pA8IVe6WnnKH00y-fWR-cvKPfKkuAmRuN1vSeJZYp7v5xM6Ift8PudJhkAkCz14qIdAvteQHpxZAscw4mhO-RQaD~O~fNZXWfBZZ8eiLgcqqOVtsetmD7bklwWZg__', price: '$80/day' }
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[white] text-black border-2 p-4 rounded-md flex flex-col justify-between"
            style={{ height: '300px' }}
          >
            <h3 className="text-xl font-semibold mb-2">{card.name}</h3> {/* Dynamic name */}
            <p className="text-black mb-4" style={{ fontSize: '16px' }}>
              {card.name}.
            </p>
            <img
        src={card.imageSrc}
        alt={`Card ${index + 1} Image`}
        className="mb-4 rounded-md"
        style={{
          width: index === 1 || index === 3 ? '150%' : '100%', // Custom width for the 2nd and 4th cards
          height: index === 1 || index === 3 ? '100px' : '150px', // Custom height for the 2nd and 4th cards
          objectFit: 'cover',
          margin: index === 1 || index === 3 ? '0 auto' : '0', // Center the image for the 2nd and 4th cards
        }}
      />
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{card.price}</p>
              <button className="bg-[#3563E9] text-white py-2 px-4 rounded-md hover:bg-[#2855b6]">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Third Set of 4 Smaller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {[
          { name: 'MGZX Exclusive', imageSrc: 'https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7EDP2iI2JRxApdPbaypXIG5OQzVYD~fCkN-TRuq32-vQrw-xk~ZEVP4EHSqgBVSHEeZZuttX5G5i090eqieFQdv0xob8AOmii5Gzz3SIu-agfjYbgeFWwF0ksKyjb3dHHf-KSBXaUpw9UMF9pLYcV0f3djEGevz07kZ5lGc21kurKIJWySoxYAb22MadcU1Xdu6QIMWAFQg74s5SVdSZc-6SV2WZ5LEoh~LucqedCN6uQ5E4TthcoFSDHHwpF6cfnirjDMIfu8cwETL9GHDJNqXvRC7AjzqW1KLEcMETA~0vP-3L~~hJiFEK7QlA9DHr-ACOEg8D3ZGNxetFuVgwg__', price: '$85/day' },
          { name: 'New MGZS', imageSrc: 'https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONSxK~-zlR4PcE8E~-IaMgarN17IyBVcgBDMWBKXTnTloQY2xWBXJc9s3zlf8TZfjZiWF7mzUE2DGaaHIYTJyMDZIPV6-TVyE-qziZIq~xfl1CO53WULROdCUN7-hiTcCmdWggbPHwG3Qg1VzwE3fzpRHif9W3bQKzu2SmdrOMEhdfw0Hys5hEwXVMPtUaJ9tw2HQYrJCamUGYunePqARfl2gIwNthFN2hzLNjQg1pia3eNU5WoebNNeZ209k1puQH~xOPzsA5o9UPVGH2Wq89eIUPjvSKy6I6BPzSQH-Wyu43uvUdHCvhHKq8VBvzVbTejJWbOrbXbZv7ZTKN77Ow__', price: '$100/day' },
          { name: 'MGZX Exclusive', imageSrc: 'https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7EDP2iI2JRxApdPbaypXIG5OQzVYD~fCkN-TRuq32-vQrw-xk~ZEVP4EHSqgBVSHEeZZuttX5G5i090eqieFQdv0xob8AOmii5Gzz3SIu-agfjYbgeFWwF0ksKyjb3dHHf-KSBXaUpw9UMF9pLYcV0f3djEGevz07kZ5lGc21kurKIJWySoxYAb22MadcU1Xdu6QIMWAFQg74s5SVdSZc-6SV2WZ5LEoh~LucqedCN6uQ5E4TthcoFSDHHwpF6cfnirjDMIfu8cwETL9GHDJNqXvRC7AjzqW1KLEcMETA~0vP-3L~~hJiFEK7QlA9DHr-ACOEg8D3ZGNxetFuVgwg__', price: '$95/day' },
          { name: 'New MGZS', imageSrc: 'https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONSxK~-zlR4PcE8E~-IaMgarN17IyBVcgBDMWBKXTnTloQY2xWBXJc9s3zlf8TZfjZiWF7mzUE2DGaaHIYTJyMDZIPV6-TVyE-qziZIq~xfl1CO53WULROdCUN7-hiTcCmdWggbPHwG3Qg1VzwE3fzpRHif9W3bQKzu2SmdrOMEhdfw0Hys5hEwXVMPtUaJ9tw2HQYrJCamUGYunePqARfl2gIwNthFN2hzLNjQg1pia3eNU5WoebNNeZ209k1puQH~xOPzsA5o9UPVGH2Wq89eIUPjvSKy6I6BPzSQH-Wyu43uvUdHCvhHKq8VBvzVbTejJWbOrbXbZv7ZTKN77Ow__', price: '$80/day' }
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[white] text-black border-2 p-4 rounded-md flex flex-col justify-between"
            style={{ height: '300px' }}
          >
            <h3 className="text-xl font-semibold mb-2">{card.name}</h3> {/* Dynamic name */}
            <p className="text-black mb-4" style={{ fontSize: '16px' }}>
              {card.name}.
            </p>
            <img
        src={card.imageSrc}
        alt={`Card ${index + 1} Image`}
        className="mb-4 rounded-md"
        style={{
          width: index === 0 || index === 2 ? '150%' : '100%', // Custom width for the 2nd and 4th cards
          height: index === 0 || index === 2 ? '100px' : '150px', // Custom height for the 2nd and 4th cards
          objectFit: 'cover',
          margin: index === 0 || index === 2 ? '0 auto' : '0', // Center the image for the 2nd and 4th cards
        }}
      />
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">{card.price}</p>
              <button className="bg-[#3563E9] text-white py-2 px-4 rounded-md hover:bg-[#2855b6]">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
  <div className="flex justify-center items-center">
    <button className="bg-[#3563E9] text-white py-2 px-8 rounded-md hover:bg-[#2855b6] mt-10">
      Rent Now
    </button>
  </div>
</div>



<footer className="bg-white text-black py-8 w-full">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex justify-between">
      {/* Left Side: Morent and Paragraph */}
      <div className="w-1/4">
      <h1 className="text-[#3563E9] font-bold" style={{fontSize:'32px'}}>MORENT</h1>
      <p className="mt-2" style={{ bottom: '70px' }}>Your content about Morent.</p>
      </div>

    {/* Right Side: About, Community, and Socials */}
    <div className="flex space-x-16 ml-40">
        {/* About Section */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold">About</h3>
          <div className="flex flex-col space-y-2 mt-4"> {/* Stack links vertically */}
            <a href="/terms" className="text-gray-400 hover:text-gray-200">How itwork</a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">Featured</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Partnership</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Business</a>

          </div>
        </div>

        {/* Community Section */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold">Community</h3>
          <div className="flex flex-col space-y-2 mt-4"> {/* Stack links vertically */}
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Events</a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">Blog</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Podcast</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Invite a friend</a>

          </div>
        </div>

        {/* Socials Section */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold">Socials</h3>
          <div className="flex flex-col space-y-2 mt-4"> {/* Stack links vertically */}
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Discord</a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-200">Instagram</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Twitter</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-200">Facebook</a>

          </div>
        </div>
      </div>
    </div>
    
    {/* Copyright Section */}
    <div className="bg-white text-center py-4 mt-8 flex justify-between items-center px-4">
      {/* Left Side: Copyright */}
      <p className="text-sm"> &copy; {new Date().getFullYear()} Morent. All Rights Reserved.</p>

      {/* Right Side: Terms and Conditions and Privacy Policy Links */}
      <div className="text-sm">
        <a href="/terms" className="text-gray-400 hover:text-white mx-4">Terms and Conditions</a>
        <a href="/privacy" className="text-gray-400 hover:text-white mx-4">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>




</div>



    
  );
}
