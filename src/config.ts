export const config = {
  // Contract Address ======================================== //
  contract_address: '0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0',
  //
  // uncomment the 2 lines above to use local images instead of retrieving images from ipfs for each tweet
  use_local_images: true,
  local_image_path: './token_images/',
  // 
  // this is a configuration for the phunk bid demo extension
  local_bids_image_path: './dist/bids_images/',
  //
  // Fiat Conversion Currency ================================ //
  // Available Options: ====================================== //
  // usd, aud, gbp, eur, cad, jpy, cny ======================= //
  currency: 'usd',
  // Message ================================================= //
  // Available Parameters: =================================== //
  // <tokenId> ==================== Token ID of transfered NFT //
  // <ethPrice> ================= Value of transactions in eth //
  // <fiatPrice> =============== Value of transactions in fiat //
  // <txHash> =========================== The transaction hash //
  // <from> ===================================== From address //
  // <to> ========================================= To address //
  saleMessage: 'This 🥚 snipe is too shocking for centralisation! CryptoMarc #<tokenId> has been sold for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0/<tokenId>\nhttps://looksrare.org/collections/0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0/<tokenId>\n\n#WAGMARC\n',
  bidMessage: 'This 🥚 snipe is too shocking for centralisation! CryptoMarc #<tokenId> received a bid for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0/<tokenId>\nhttps://looksrare.org/collections/0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0/<tokenId>\n\n#WAGMARC\n',
  // Prefer ENS over 0x address (Uses more Alchemy requests) = //
  // Available Options: ====================================== //
  // true, false ============================================= //
  ens: true,
  // Include free mints in tweets ============================ //
  // Available Options: ====================================== //
  // true, false ============================================= //
  includeFreeMint: false,
};
