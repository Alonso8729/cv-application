import '../../styles/PersonalPreview.css'

export function PersonalPreview({fullName,email,phoneNumber,address}){
    return (
        <div className="personal-info">
            <h1 className="personal-name"><strong>{fullName}</strong></h1>
            <div className="contact-info">
                {email && (
                    <div>
                        <i class="fa-solid fa-envelope"></i>
                        <span>{email}</span>
                    </div>
                )}
                {phoneNumber && (
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <span>{phoneNumber}</span>
                    </div>
                )}
                {address && (
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <address>{address}</address>
                    </div>
                )}
            </div>
        </div>
    )



}