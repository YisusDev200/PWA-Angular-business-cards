export class BusinessCardInfo {
    businessName: string;
    businessAddress: string;
    businessPhone: string;
    businessEmail: string;
    businessWebsite: string;
    businessLogo: string;
    facebookLink: string;   
    twitterLink: string;
    instagramLink: string;
    linkedinLink: string;
    youtubeLink: string;

    constructor(businessName: string, businessAddress: string, businessPhone: string, businessEmail: string, businessWebsite: string, businessLogo: string, facebookLink: string, twitterLink: string, instagramLink: string, linkedinLink: string, youtubeLink: string) {
        this.businessName = businessName;
        this.businessAddress = businessAddress;
        this.businessPhone = businessPhone;
        this.businessEmail = businessEmail;
        this.businessWebsite = businessWebsite;
        this.businessLogo = businessLogo;
        this.facebookLink = facebookLink;
        this.twitterLink = twitterLink;
        this.instagramLink = instagramLink;
        this.linkedinLink = linkedinLink;
        this.youtubeLink = youtubeLink;
    }

    static getBusinessCardInfo() {  
        return new BusinessCardInfo('Tu Espacio MKT', 'domicilio conocido', '9993606511', 'presenciadigital03@gmail.com', 'www.jomatconsultores.com', '', 'https://www.facebook.com/tuespaciomktoriente/', 'Your Twitter Link', 'Your Instagram Link', 'Your Linkedin Link', 'Your Youtube Link');
    }
}