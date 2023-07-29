-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clusters`
--

DROP TABLE IF EXISTS `clusters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clusters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `powerHigh` float DEFAULT NULL,
  `powerAverage` float DEFAULT NULL,
  `powerLow` float DEFAULT NULL,
  `energyConsumption` float DEFAULT NULL,
  `numServers` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `numCores` int DEFAULT NULL,
  `numTBsRam` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clusters`
--

LOCK TABLES `clusters` WRITE;
/*!40000 ALTER TABLE `clusters` DISABLE KEYS */;
INSERT INTO `clusters` VALUES (1,'cluster 1',100,50,20,200,20,"",'North Scotland',2000,20),(2,'cluster 2',100,50,20,200,20,"",'South Scotland',2000,20),(3,'cluster 3',100,50,20,200,20, "","North West England",2000,20),(4,'cluster 4',100,50,20,200,20, "","North East England",2000,20),(5,'cluster 5',100,50,20,200,20, "","Yorkshire",2000,20),(6,'cluster 6',100,50,20,200,20, "","North Wales",2000,20),(7,'cluster 7',100,50,20,200,20,"", "South Wales",2000,20),(8,'cluster 8',100,50,20,200,20,"","West Midlands",2000,20),(9,'cluster 9',100,50,20,200,20, "","East Midlands",2000,20),(10,'cluster 10',100,50,20,200,20, "", "East England",2000,20),(11,'cluster 11',100,50,20,200,20, '','South West England',2000,20),(12,'cluster 12',100,50,20,200,20, "", "South England",2000,20),(13,'cluster 13',100,50,20,200,20,"","London",2000,20),(14,'cluster 14',100,50,20,200,20,"","South East England",2000,20);
/*!40000 ALTER TABLE `clusters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30 17:10:41
