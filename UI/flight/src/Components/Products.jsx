import ProductsListing from "./ProductsListing";
import dropbox from '../assets/dropbox-product.svg'
import sign from '../assets/sign-product.svg'
import docsend from '../assets/docsend-product.svg'
import backup from '../assets/backup-product.svg'
import capture from '../assets/capture-product.svg'
import transfer from '../assets/transfer-product.svg'
import paper from '../assets/paper-product.svg'
import passwords from '../assets/passwords-product.svg'

export default function Products() {
    return(
        <>
            <div className="products-container">
                <div className="products-heading">
                    <h1>A set of products to help you do more</h1>
                </div>
                <div className="products-listing">
                    <div className="products">
                        <ProductsListing icon={dropbox} title="Dropbox" desc="Securely store, organize, and share all your files." learnLink="#" />
                        <ProductsListing icon={sign} title="Sign" desc="Streamline your document workflows with legally-binding eSignatures." learnLink="#" />
                        <ProductsListing icon={docsend} title="DocSend" desc="Securely share your documents with real-time insights, so you know what's most impactful." learnLink="#" />
                        <ProductsListing icon={backup} title="Backup" desc="Automatically back up important files on your devices to the cloud and easily restore them." learnLink="#" />
                        <ProductsListing icon={capture} title="Capture" desc="Get your message across with screenshots, GIFs, or videos recorded right on your screen." learnLink="#" />
                        <ProductsListing icon={transfer} title="Transfer" desc="Quickly and securely deliver large files—up to 100 GB—to anyone." learnLink="#" />
                        <ProductsListing icon={paper} title="Paper" desc="Create collaborative documents to coordinate work and drive projects forward." learnLink="#" />
                        <ProductsListing icon={passwords} title="Passwords" desc="Automatically store unlimited passwords in one central, secure place." learnLink="#" />
                    </div>
                </div>
            </div>
        </>
    )
}